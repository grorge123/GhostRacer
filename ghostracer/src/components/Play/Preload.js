import { randomArticle } from "../../api/ladder.js";
import { getParagraph, setMode } from "../../states/play-actions.js"

export function preload(dispatch, history, mode) {
    dispatch(setMode(mode))
    randomArticle('lawrence').then(
        ans => dispatch(getParagraph(ans))
    ).then(
        () => history.push('/typingScreen')
    )
}