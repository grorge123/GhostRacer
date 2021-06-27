import { randomArticle } from "../../api/ladder.js";

export function preload(getParagraph, history) {
    randomArticle('lawrence').then(
        (ans) => {
            getParagraph(ans);
            console.log(ans);
        }
    ).then(
        () => history.push('/typingScreen')
    )
}