import React, { useState, useEffect, useContext } from "react";
import { GetRepositoryData, GetUserData } from "../Fetcher/Fetcher";
import Icon from "../Icon/Icon";
import { userContext } from "../MainSection/MainSection";
import "./RepositoryDisplayer.scss";

import eye_icon from "../images/Icons/eye.png";
import GetLanguageColour, { GetForeColour } from "../LanguageColourizer/LanguageColourizer";

const INITIAL_REPOSITORY = {
    name: "",
    description: "",
    content: [{}].filter(_ => false),
    creationDate: new Date(""),
    pushDate: new Date(""),
    updateDate: new Date(""),
    URL: "",
    languages: [{ name: "", characterCount: 0, }].filter(_ => false),
    topics: [""].filter(_ => false),
    watcherCount: 0,
};

/** A displayer for all repository of a user.
 * @returns A new Repository Displayer Element.
 */
export default function RepositoryDisplayer() {
    const { user, setUser } = useContext(userContext);

    const [repositories, setRepositories] = useState([INITIAL_REPOSITORY].filter(_ => false));

    useEffect(() => {
        (async function Wait() {
            user.username && await UpdateUserRepositories();
        })();
    }, [user]);

    /** Searches for the current user's repositories on GitHub then updates them to be displayed. */
    async function UpdateUserRepositories() {
        let _repositories = [{ ...INITIAL_REPOSITORY }].filter(_ => false);
        GetUserData(user.username, async data => {
            for (let datum of data) {
                let repository = { ...INITIAL_REPOSITORY };
                repository = {
                    name: datum.name,
                    description: datum.description,
                    creationDate: new Date(datum.created_at),
                    pushDate: new Date(datum.pushed_at),
                    updateDate: new Date(datum.updated_at),
                    URL: datum.svn_url,
                    topics: datum.topics,
                    watcherCount: datum.watchers,
                }
                console.log(datum.name);

                // await GetRepositoryData(user.username, datum.name, undefined, undefined, "content");
                await GetRepositoryData(user.username, datum.name, async languageData => {
                    let languages = [{ name: "", characterCount: 0, }].filter(_ => false);

                    for (let [languageName, languageCharacterCount] of Object.entries(languageData)) {
                        languages.push({ name: languageName, characterCount: languageCharacterCount });
                    }

                    repository.languages = languages;

                    _repositories.push(repository);

                    if (datum == data.at(-1)) { setRepositories(_ => _repositories); }
                }, undefined, "languages");
            }
        }, undefined, "repos");
    }

    return (
        <div id="repository-displayer">
            {repositories.map((repository, i) => <Repository key={i} {...repository} />)}
        </div>
    );
};

/** A displayer for a repository.
 * @param {Object} properties The properties of the element.
 * @param {String} properties.name The name of the Repository.
 * @param {String} properties.description The description of Repository.
 * @param {Array<Object>} properties.content The content stored within the Repository.
 * @param {Date} properties.creationDate The date the Repository was created at.
 * @param {Date} properties.pushDate The date the Repository was pushed at.
 * @param {Date} properties.updateDate The date the Repository was last updated at.
 * @param {String} properties.URL The URL of the Repository.
 * @param {Array<{ name: String, characterCount: Number, }>} properties.languages The languages and their character count that were used within the Repository.
 * @param {Array<String>} properties.topics The topics the Repository is related to.
 * @param {Number} properties.watcherCount The amount of people watched the Repository.
 * @returns A new Repository Element.
 */
function Repository({
    name,
    description,
    content,
    creationDate,
    pushDate,
    updateDate,
    URL,
    languages,
    topics,
    watcherCount,
}) {
    /** Displays the name, and the description of the repository. */
    function AboutDisplayer() {
        return (
            <>
                <h1>{name ?? "None"}</h1>
                <p className="break">{description ?? "No furthur information to be shown."}</p>
            </>
        );
    }

    /** Displays the creation, push, and update date of the repository. */
    function DateDisplayer() {
        return (
            <div className="date-displayer break">
                <div className="displayer">
                    <q>Created At</q>
                    <p>{creationDate?.toUTCString() ?? "Invalid Date"}</p>
                </div>

                <div className="displayer">
                    <q>Pushed At</q>
                    <p>{pushDate?.toUTCString() ?? "Invalid Date"}</p>
                </div>

                <div className="displayer">
                    <q>Last Updated At</q>
                    <p>{updateDate?.toUTCString() ?? "Invalid Date"}</p>
                </div>
            </div>
        );
    }

    /** Displays a button to open the repository URL, as well as the watchers count. */
    function URLDisplayer() {
        return (
            <div className="displayer break">
                <button>
                    <p>Visit Repository</p>
                    <a href={URL} target="_blank"></a>
                </button>
                <div className="displayer">
                    <Icon iconURL={eye_icon} size="2rem" />
                    <p>{watcherCount ?? "0"}</p>
                </div>
            </div>
        );
    }

    /** Displays the content of the repository. */
    function ContentDisplayer() {
        return (
            <></>
            // TODO: for later version.
            // <div className="break">
            //     <q>Content</q>
            // </div>
        );
    }

    /** Displays all languages used in the repository, as well as the most used one. */
    function LanguageDisplayer() {
        languages = languages?.sort((previous, next) => previous.characterCount + next.characterCount);
        const TOTAL_CHARACTERS = languages?.length ? languages.map(language => language.characterCount).reduce((previous, next) => previous + next) : 0,
            PERCENTAGE = 100;

        return (
            <div className="displayer vertical break">
                <q>Languages</q>

                {
                    languages?.length ? <div className="language-line-displayer">
                        <p>{languages?.[0]?.name ?? ""}</p>
                        <div>
                            {
                                languages?.map((language, i) =>
                                    <div key={i} style={{
                                        "--width-percentage": `${language.characterCount * PERCENTAGE / TOTAL_CHARACTERS}%`,
                                        backgroundColor: GetLanguageColour(language.name),
                                    }}></div>
                                ) ?? ""
                            }
                        </div>
                    </div> : ""
                }

                <div className="vertical-container">
                    {
                        languages?.length ? languages.map((language, i) => {
                            let backgroundColour = GetLanguageColour(language.name),
                                foreColour = GetForeColour(backgroundColour, "#FFFFFF", "#000000");
                            return (
                                <q key={i} style={{
                                    color: foreColour,
                                    backgroundColor: backgroundColour,
                                }}>
                                    {`${language.name}: ${language.characterCount}ch`}
                                </q>
                            );
                        }) : "No Languages Used"
                    }
                </div>
            </div>
        );
    }

    /** Displays all the topics mentioned within the repository. */
    function TopicDisplayer() {
        return (
            <div className="displayer vertical">
                <q>Topics</q>
                <div className="vertical-container">
                    {topics?.length ? topics.map((topic, i) => <p key={i}>{topic}</p>) : "No Topics Mentioned"}
                </div>
            </div>
        );
    }

    return (
        <div className="repository">
            <AboutDisplayer />
            <DateDisplayer />
            <URLDisplayer />
            <ContentDisplayer />
            <LanguageDisplayer />
            <TopicDisplayer />
        </div>
    );
}