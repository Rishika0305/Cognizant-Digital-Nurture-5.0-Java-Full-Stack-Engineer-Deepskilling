function Scorebelow70(props) {

    const filteredPlayers = props.players.filter(
        (player) => player.score < 70
    );

    return (
        <div>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredPlayers.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Scorebelow70;