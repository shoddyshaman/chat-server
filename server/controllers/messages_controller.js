const messages = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    create: (req, res) => {
        const{text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {text} = req.body;
        const {id} = req.params;

        let messageIndex = messages.findIndex(element => element.id === +id);
        messages[messageIndex] = {
            id: messages[messageIndex].id,
            text: text || messages[messageIndex].text,
            time: messages[messageIndex].time
        };

        res.status(200).send(messages)
    },
    delete : (req, res) => {
        const {id} = req.params;

        let messageId = messages.findIndex(element => element.id === +id);
        messages.splice(messageId, 1);

        res.status(200).send(messages)
    }

}