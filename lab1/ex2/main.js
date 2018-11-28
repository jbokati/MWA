function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();

    let allDays = {
        0: "weekend",
        2: "weekday",
        1: "weekday",
        3: "weekday",
        4: "weekday",
        5: "weekday",
        6: "weekend",
    }
    return allDays[day];
}