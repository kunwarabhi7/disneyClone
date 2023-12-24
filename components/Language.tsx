import iso6391 from "iso-639-1";

const Language = ({ languageCode }: any) => {
  const languageName = iso6391.getName(languageCode);

  return (
    <div>
      {" "}
      <p>Original Language : {languageName}</p>
    </div>
  );
};

export default Language;
