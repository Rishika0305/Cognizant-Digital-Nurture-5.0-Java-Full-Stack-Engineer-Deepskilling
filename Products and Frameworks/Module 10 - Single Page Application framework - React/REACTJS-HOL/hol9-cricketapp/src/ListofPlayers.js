function ListofPlayers(props) {

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
                    {props.players.map((player, index) => (
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

export default ListofPlayers;