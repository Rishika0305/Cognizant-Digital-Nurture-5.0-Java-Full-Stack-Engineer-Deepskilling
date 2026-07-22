import ListofIndianPlayers from "./ListofIndianPlayers";

const T20players = ["First Player", "Second Player", "Third Player"];
const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

// Merged Array
export const IndianPlayers = [...T20players, ...RanjiTrophyPlayers];

// Odd Players Component
export function OddPlayers(props) {

    const oddPlayers = props.IndianTeam.filter(
        (player, index) => index % 2 === 0
    );

    return (
        <div>
            {oddPlayers.map((player, index) => (
                <p key={index}>{player}</p>
            ))}
        </div>
    );
}

// Even Players Component
export function EvenPlayers(props) {

    const evenPlayers = props.IndianTeam.filter(
        (player, index) => index % 2 !== 0
    );

    return (
        <div>
            {evenPlayers.map((player, index) => (
                <p key={index}>{player}</p>
            ))}
        </div>
    );
}

export default ListofIndianPlayers;