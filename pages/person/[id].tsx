import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDataPerson } from "src/hooks/reactQuery/useReactQuery";
import { URL_IMG_PERSON } from "src/utils/constants";

const PersonDetail = () => {
  const { query } = useRouter();
  const personId = query.id;

  const [dataPerson, setDataPerson] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchDataPerson(personId);
      setDataPerson(data);
    })();
  }, [dataPerson?.id]);

  if (dataPerson === undefined) return "Loading";
  console.log("dataPerson", dataPerson);

  return (
    <div>
      <h1>{dataPerson.name}</h1>
      <Image src={URL_IMG_PERSON + dataPerson.profile_path} width={300} height={450} />
      <div>
        <h3>Biografía</h3>
        <p>{dataPerson.biography}</p>
        <h3>Información personal</h3>
        <p>Trabajo : {dataPerson.known_for_department}</p>
        <p>Cumpleaños : {dataPerson.birthday}</p>
        <p>Muerte : {dataPerson.deathday}</p>
        <p>Nacido en : {dataPerson.place_of_birth}</p>
      </div>
      <div>
        <h3>Conocido por</h3>
        {dataPerson.also_known_as.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default PersonDetail;
