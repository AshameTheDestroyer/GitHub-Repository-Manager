/** Searches for a specific data on the internet and applies a function on their data.
 * @param {String} URL The link of the data.
 * @param {(data: Response) => void} callback The function that'll be applied on the data restored.
 * @param {(reason: any) => void} fallback The function that'll be applied if the data failed to be restored.
 */
async function GetDataFromLink(URL, callback, fallback) {
    fetch(URL)
        .then(async data => {
            data.json()
                .then(async value => callback(value))
                .catch(async reason => fallback?.(reason));
        })
        .catch(async response => fallback?.(response))
        .finally(() => console.log("Finished Fetching."));
}

/** Searches for a user on GitHub and applies a callback function on their data.
 * @param {String} username The name of the user.
 * @param {(data: Response) => void} callback The function that'll be applied on the data restored.
 * @param {(reason: any) => void} fallback The function that'll be applied if the data failed to be restored.
 * @param {"all" | "repos" | "followers" | "following"} section Determines the desired section that'll be fetched about the user.
 */
export async function GetUserData(username, callback, fallback, section = "all") {
    await GetDataFromLink(`https://api.github.com/users/${username}${section != "all" ? `/${section}` : ""}`, callback, fallback);
}

/** Searches for a repository on GitHub and applies a callback function on its data.
 * @param {String} username The name of the user that owns the repository.
 * @param {String} repositoryName The name of the repository.
 * @param {(data: Response) => void} callback The function that'll be applied on the data restored.
 * @param {(reason: any) => void} fallback The function that'll be applied if the data failed to be restored.
 * @param {"all" | "languages" | "content"} section Determines the desired section that'll be fetched about the repository.
 */
export async function GetRepositoryData(username, repositoryName, callback, fallback, section = "all") {
    await GetDataFromLink(`https://api.github.com/repos/${username}/${repositoryName}${section != "all" ? `/${section}` : ""}`, callback, fallback);
}