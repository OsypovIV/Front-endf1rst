function main(callback1, callback2) {
    setTimeout(() => {
        callback1();
    }, 2000);
    
let count = 0;
    const intervalId = setInterval(() => {
        if (count < 5) {
            callback2();
            count++;
        } else {
    clearInterval(intervalId);
            }
            }, 1000);
        }

        
        function callback1() {
            console.log("America YA");
        }

        function callback2() {
            console.log("Hallo, Hallo");
        }

        main(callback1, callback2);