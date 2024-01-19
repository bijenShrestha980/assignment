import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Modal from "../../../assignment-ui/src/Modal";

const App = () => {
  const [open, setOpen] = useState(false);

  async function getAPI() {
    // console.log(token);
    const response = await fetch(`https://dummyjson.com/users?limit=5`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getAPI,
  });

  if (isError)
    return <div>{error.message ? error.message : "Something went wrong"}</div>;
  return (
    <main style={styles.main}>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <Modal open={open} setOpen={setOpen}>
          <h3 style={styles.heading}>24 birthdays today</h3>
          <div style={styles.wrapper}>
            {data.users.map((user: any) => (
              <div style={styles.card} key={user.id}>
                <img src={user.image} alt="" style={styles.cardImg} />
                <div>
                  <h4
                    style={styles.cardTitle}
                  >{`${user.firstName} ${user.lastName}`}</h4>
                  <p style={styles.cardDesc}>{user.age} years</p>
                </div>
              </div>
            ))}
            <button>View All</button>
          </div>
        </Modal>
      )}
    </main>
  );
};

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100dvh",
    width: "100vw",
    background: "#ce588f",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "semibold",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  card: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    padding: "0.8rem 0",
    borderRadius: "0.5rem",
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
  cardImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  cardTitle: {
    fontSize: "1rem",
    fontWeight: 600,
  },
  cardDesc: {
    fontSize: "0.8rem",
    color: "#888",
  },
};

export default App;
