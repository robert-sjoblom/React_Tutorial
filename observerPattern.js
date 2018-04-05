

/*

    Sensor          Hub/EventEmitter            Subscriber
                                    addSubscriber               (pilen anropar en function som heter addSubscriber)
                                    <------------ 
ny temp->
        notifySubscribers
        --------------->






*/

const Hub = {
    subscribers: {},

    // addSubscriber är en property på Hub, addSubscriber är också en funktion
    addSubscriber(eventName, eventCallback) {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(eventCallback);

        //return subscriberID (så subscribern kan avregistrera sig)
    },

    notify(eventName, eventData) {
        // requires a list of subscribers to work.
        const subscriberList = this.subscribers[eventName];
        subscriberList.forEach(subscriber => {
            subscriber(eventData);
        });

    },

    getEvents() {
        const eventNames = [];
        for (const key in this.subscribers) {
            eventNames.push(key);
            eventNames.push(this.subscribers[key]);
        }
        return eventNames;
    }
    // billiga, snabba sättet: return Object.keys(this.subscribers);
    //removeSubscriber(eventName, eventCallback)
};


// const temp = () => {
//     stuff;
// }

Hub.addSubscriber("temperature", (currentTemperature) => {
    console.log(`Current temp is 1: ${currentTemperature}`);
});
// Hub.addSubscriber("temperature", (currentTemperature) => {
//     console.log(`Current temperature is 2: ${currentTemperature}`);
// });
Hub.addSubscriber("heat", (currentHeat) => {
    console.log(`Current heat reading: ${currentHeat}`);
});

Hub.notify("temperature", 10);
Hub.notify("heat", 20.5);

// i nån dashboard
// const currentEvents = Hub.getEvents();
// console.log(currentEvents);


// {
//     temperature: function() {.function body.}
// }

