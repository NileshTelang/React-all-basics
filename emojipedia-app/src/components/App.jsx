import React from "react";
import Card from "../components/Card";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      Emoji={emojiTerm.emoji}
      Name={emojiTerm.name}
      Meaning={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
