// Get Subs and Card from the Events objects
export const GetRequiredEvents = (events) => {
    const newEvents = events.filter(
        item => item.type === "Card" || item.type === "subst"
    )

    return newEvents;
}

export const GetPlayerEvent = (events, player) => {
    const newEvents = events.filter(
        item => item.assist.id === player.id || item.player.id === player.id
    )
    return newEvents
}