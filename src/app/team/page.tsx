import PlayerCard from "@/components/PlayerCard";
import getRobur from "../actions/getRobur";

const Team = async () => {
  const robur = await getRobur();

  return (
    <>
      <h1 className="text-3xl font-bold">La squadra</h1>
      <h2 className="text-xl font-semibold">Di seguito i giocatori che fanno parte della rosa della Robur.</h2>

      <div className="mt-24 grid gap-4 grid-cols-1 md:grid-cols-4">
        {robur.roster.map(player => (
          <PlayerCard player={player} key={player.id} />
        ))}
      </div>
    </>
  );
};

export default Team;
