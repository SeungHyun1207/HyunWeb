import React, { useEffect, useState } from 'react';

function VisitorCounter() {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('HyunReactProjectVisitorCount');
        const count = storedCount ? parseInt(storedCount, 10) : 0;

        const ipAddress = getIPAddress(); // 클라이언트 IP 주소를 추출하는 함수 호출 (아래에서 정의)
        const visitedIPs = JSON.parse(localStorage.getItem('VisitedIPs')) || [];

        if (!visitedIPs.includes(ipAddress)) {
            // 중복된 IP가 아닌 경우 방문자 수 증가
            setVisitorCount(count + 1);
            visitedIPs.push(ipAddress);
            localStorage.setItem('VisitedIPs', JSON.stringify(visitedIPs));
        } else {
            // 중복된 IP인 경우 방문자 수 유지
            setVisitorCount(count);
        }

        localStorage.setItem('HyunReactProjectVisitorCount', count + 1);
    }, []);

    // 클라이언트 IP 주소를 추출하는 함수
    const getIPAddress = () => {
        // 클라이언트의 IP 주소를 추출하는 로직을 구현
        // 서버 환경에 따라 다르므로 해당 환경에 맞게 구현해야 함
        // 예를 들어, 서버로부터 클라이언트의 IP 주소를 받아올 수 있는 API를 호출하거나, 웹 소켓을 사용하여 IP 주소를 추출하는 방법 등을 사용할 수 있음
        // 이 예시에서는 클라이언트 측에서 직접 IP 주소를 추출하는 것은 보안상의 이유로 권장하지 않음
        return '127.0.0.1'; // 예시로 임의의 IP 주소를 반환
    };

    return (
        <div>
            <h1>방문자 수: {visitorCount}</h1>
        </div>
    );
}

export default VisitorCounter;