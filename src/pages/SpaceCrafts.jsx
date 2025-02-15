import useSpaceCrafts from "../hooks/useSpaceCrafts";

const SpaceCrafts = () => {
  const { data: spacecrafts, isLoading, error } = useSpaceCrafts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <>
      <h1>Spacecrafts</h1>
      <ul>
        {spacecrafts.map((spacecraft) => (
          <li key={spacecraft.id}>{spacecraft.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SpaceCrafts;
