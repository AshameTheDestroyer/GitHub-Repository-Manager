import React, { useState, useEffect, useContext } from "react";
import { GetUserData } from "../Fetcher/Fetcher";
import Icon from "../Icon/Icon";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { userContext } from "../MainSection/MainSection";
import { stateContext } from "../Page";
import TextBox from "../TextBox/TextBox";
import "./UserPicker.scss";

import failed_icon from "../images/Icons/offline_cloud.png";
import unfound_icon from "../images/Icons/warning.png";
import { Route } from "react-router-dom";

/** A set of all the possible fetching states. */
const FETCHING_STATE = {
    Static: "static",
    Loading: "loading",
    Failed: "failed",
    Unfound: "unfound",
};

/** An element that picks a user and displays their data. */
export default function UserPicker() {
    const { state, setState } = useContext(stateContext);
    const { user, setUser } = useContext(userContext);

    const [typedUsername, setTypedUsername] = useState("");
    const [isTypedUsernameValid, setIsTypedUsernameValid] = useState(false);
    const [fetchingState, setFetchingState] = useState(FETCHING_STATE.Static);

    /** Renders the icon of the current fetching state. */
    function CurrentFetchingStateIcon() {
        switch (fetchingState) {
            case FETCHING_STATE.Loading: return (
                <Route path="../LoadingIcon/LoadingIcon">
                    <LoadingIcon />
                </Route>
            );

            case FETCHING_STATE.Failed: return (
                <Route path="../Icon/Icon">
                    <Icon iconURL={failed_icon} />
                </Route>
            );

            case FETCHING_STATE.Unfound: return (
                <Route path="../Icon/Icon">
                    <Icon iconURL={unfound_icon} />
                </Route>
            );

            default: case FETCHING_STATE.Static: return (<></>);
        }
    }

    /** Handles the data of a user when found.
     * @param {Response} data The data of the user.
     */
    async function HandleUserData(data) {
        console.log(data);

        if (data.message == "Not Found") {
            setUser(_ => { });
            setFetchingState(_ => FETCHING_STATE.Unfound);
            return;
        }

        let newUser = { ...user };
        newUser = {
            username: data.login,
            nickname: data.name,
            biography: data.bio,
            photoURL: data.avatar_url,
            creationDate: new Date(data.created_at),
        };

        await GetUserData(typedUsername, async followerData => newUser.followers = followerData,
            undefined, "followers");

        await GetUserData(typedUsername, async followingData => {
            newUser.followees = followingData;
            setUser(_ => newUser);
            setFetchingState(FETCHING_STATE.Static);
        }, undefined, "following");
    }

    /** Displays the icon, username, nickname, and biography of the user. */
    function AboutDisplayer() {
        return (
            <div>
                <Route path="../Icon/Icon">
                    <Icon size="15rem" iconURL={user?.photoURL ?? ""}>
                        <CurrentFetchingStateIcon />
                    </Icon>
                </Route>

                <h1>{user?.username || "Anonymous User"}</h1>
                <h3>{user?.nickname || "Nickname"}</h3>
                <p className="break">{user?.biography || "No furthur information to be shown."}</p>
            </div>
        );
    }

    /** Displays the followers, and followees of the user. */
    function FollowingDisplayer() {
        return (
            <div id="following-displayer" className="break">
                <div className="displayer">
                    <q>Followers</q>
                    <p>{user?.followers?.length ?? "0"}</p>
                </div>
                <div className="displayer">
                    <q>Followees</q>
                    <p>{user?.followees?.length ?? "0"}</p>
                </div>
            </div>
        );
    }

    /** Displays the creation date of the user's account. */
    function DateDisplayer() {
        return (
            <div id="date-displayer" className="displayer">
                <q>Creation Date</q>
                <p>{user?.creationDate?.toUTCString() ?? "Invalid Date"}</p>
            </div>
        );
    }

    return (
        <div id="user-picker" style={{
            "--position-x": state.isNaveBarShown ? "0%" : "-100%",
        }}>
            <AboutDisplayer />
            <FollowingDisplayer />
            <DateDisplayer />

            <div>
                <Route path="../TextBox/TextBox">
                    <TextBox placeholder="Username"
                        text={typedUsername}
                        setText={setTypedUsername}
                        pattern="[a-zA-Z_]|[a-zA-Z_][a-zA-Z0-9_-]+"
                        onChange={e => setIsTypedUsernameValid(e.target.validity.valid)}
                    />
                </Route>

                <button onClick={async _ => {
                    setFetchingState(_ => FETCHING_STATE.Loading);
                    await GetUserData(typedUsername, HandleUserData, _ => setFetchingState(_ => FETCHING_STATE.Failed));
                }} disabled={!isTypedUsernameValid || !typedUsername.length}>Get Data</button>
            </div>
        </div>
    );
};