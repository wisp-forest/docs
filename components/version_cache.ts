import { onMounted } from 'vue';

const cacheKeyOf = (owner: string, repo: string) => `latest_release_${owner}/${repo}`

const lookupLatestRelease = async (owner: string, repo: string) => {
    const current = sessionStorage.getItem(cacheKeyOf(owner, repo));
    if (current != null) {
        return current;
    }

    const releaseData = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`).then((response) => response.json());
    const tag = releaseData['tag_name'];

    sessionStorage.setItem(cacheKeyOf(owner, repo), tag);
    return tag as string;
};

export const insertVersion = async (owner: string, repo: string, selector: string) => onMounted(async () => {
    const version = await lookupLatestRelease(owner, repo);

    const elements = document.querySelectorAll(selector);
    for (const element of elements) {
        element.innerHTML = element.innerHTML.replaceAll("...", version);
    }
});