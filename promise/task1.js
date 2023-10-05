function delayText(text, milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, milliseconds);
    });
}

async function longText(text, ms) {
    try {
        const result = await delayText(text, ms);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

longText("Very long text", 5000);

const easyDelayedText = (text, ms) => setTimeout(() => console.log(text), ms);

easyDelayedText("Very long text but easy to read", 2500);
