import { randomArticle } from "../../api/ladder.js";

export function preload(getParagraph, history) {
    randomArticle('lawrence').then(
        ans => getParagraph({
            initialWords: ans.text,
            hash: ans.hash
        })
    ).then(
        () => history.push('/typingScreen')
    )
}