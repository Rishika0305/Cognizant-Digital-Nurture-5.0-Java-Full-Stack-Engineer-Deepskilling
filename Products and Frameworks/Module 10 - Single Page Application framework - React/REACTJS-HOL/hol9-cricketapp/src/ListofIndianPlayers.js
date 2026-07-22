function ListofIndianPlayers(props) {

    return (
        <div>
            <h3>Merged Indian Players</h3>

            <ul>
                {props.IndianPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListofIndianPlayers;