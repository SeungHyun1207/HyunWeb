import React, { useState, useEffect } from "react";

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // 컴포넌트가 언마운트되면 타이머를 정리합니다.
        return () => {
            clearInterval(timer);
        };
    }, []);

    // 시간을 포맷팅하는 함수
    const formatTime = (time) => {
        let hours = time.getHours();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const minutes = time.getMinutes().toString().padStart(2, "0");
        const seconds = time.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    };

    // 날짜를 포맷팅하는 함수
    const formatDate = (time) => {
        const year = time.getFullYear();
        const month = (time.getMonth() + 1).toString().padStart(2, "0");
        const date = time.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${date}`;
    };

    return (
        <div className="clock">
            <div className="date">{formatDate(currentTime)}</div>
            <div className="time">{formatTime(currentTime)}</div>
        </div>
    );
}

export default Clock;