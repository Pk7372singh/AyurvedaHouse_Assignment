import { useState } from "react";

const ReviewPage = () => {
  const [safetyRating, setSafetyRating] = useState(5);
  const [communicationRating, setCommunicationRating] = useState(4);
  const [recommend, setRecommend] = useState(true);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Leave a review</h1>

      <div style={styles.section}>
        <h2>Safety</h2>
        <Rating value={safetyRating} onChange={setSafetyRating} />
      </div>

      <div style={styles.section}>
        <h2>Communication</h2>
        <Rating value={communicationRating} onChange={setCommunicationRating} />
      </div>

      <div style={styles.section}>
        <h2>Would you recommend Trausti?</h2>
        <div style={styles.recommend}>
          <button
            onClick={() => setRecommend(false)}
            style={recommend ? styles.button : styles.selectedButton}
          >
            <span>👎</span> No
          </button>
          <button
            onClick={() => setRecommend(true)}
            style={recommend ? styles.selectedButton : styles.button}
          >
            <span>👍</span> Yes
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <h2>Praise</h2>
        <input
          type="text"
          placeholder="Adventurous ... Good Listener"
          style={styles.input}
        />
      </div>
    </div>
  );
};

const Rating = ({ value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={styles.rating}>
      {stars.map((star) => (
        <span
          key={star}
          style={star <= value ? styles.starFilled : styles.starEmpty}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  rating: {
    display: "flex",
  },
  starFilled: {
    color: "gold",
    fontSize: "24px",
    cursor: "pointer",
  },
  starEmpty: {
    color: "lightgray",
    fontSize: "24px",
    cursor: "pointer",
  },
  recommend: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px",
    border: "1px solid black",
    background: "white",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  selectedButton: {
    padding: "10px",
    border: "1px solid black",
    background: "green",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid lightgray",
  },
};

export default ReviewPage;
