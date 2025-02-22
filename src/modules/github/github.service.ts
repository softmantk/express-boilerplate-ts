export class GithubService {
    getGithubRepositoryList = () => {
        // throw 'some error'
        console.log("Get Github Repository");
        return [
            {
                a: 1,
                b: 2
            }
        ]
    }
}

export default new GithubService();