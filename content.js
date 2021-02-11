function getElementByXpath(path) {
    return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
}

function clearDM() {
    setTimeout(() => {
        var firstUser = getElementByXpath(
            '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/section[1]/div[2]/div/div/div[2]/section/div/div/div[1]/div/div/div'
        );
        firstUser.click();
        console.log("Primeiro usuário clicado.");
        setTimeout(() => {
            var infoButton = getElementByXpath(
                '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/section[2]/div[1]/div/div/div/div/div[2]/div/a'
            );
            infoButton.click();
            console.log("Botão de info clicado.")
            setTimeout(() => {
                var exitChatButton = getElementByXpath(
                    '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/section[2]/div[2]/div/div/div/div[3]/div[4]/div/div/span'
                );
                exitChatButton.click();
                console.log("Botão de sair da conversa clicado.")
                setTimeout(() => {
                    var exitButton = getElementByXpath(
                        '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div[3]/div[2]'
                    );
                    exitButton.click();
                    console.log("Conversa excluída.")
                    clearDM()
                }, 100);
            }, 100);
        }, 100);
    }, 500);
}
clearDM()