import { json } from "stream/consumers";

export function useApi() {

  const id = ref()

  async function connect(email:String, password:String): Promise<number> {
    fetch('http://localhost:3000/lanistes?email='+ email + '&password=' + password, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        if(response[0] != undefined) {
          id.value = response[0].id;
          alert(id.value)
        }
        else{
          alert("Identifiants invalides")
        }
      })
      .catch((err) => {
        console.log(err);
      });
      return id.value
  }

  const ludis = ref();
  const ludi = ref()

  async function getLudi(id: String) {
    fetch("http://localhost:3000/ludis?id=" + id, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        console.log(id);
        if (response[0] != undefined) {
          ludi.value = response[0];
          console.log(ludi.value)
          console.log(response[0])
        } else {
          alert("id incorrect");
        }
      })
      .catch((err) => {
        console.log(err);
      });
      return ludi.value
  }

  async function getLudis(lanisteId: String) {
    await fetch("http://localhost:3000/ludis?lanisteId=" + lanisteId, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        if (response[0] != undefined) {
          ludis.value = response;
        } else {
          alert("Pas de ludis correspondants");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return ludis.value;
  }

  async function getAllLudis() {
    await fetch("http://localhost:3000/ludis", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        if (response[0] != undefined) {
          ludis.value = response;
        } else {
          alert("Pas de ludis correspondants");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return ludis.value;
  }
  async function postLudi(body: string) {
    console.log("before : " + body);
    await fetch("http://localhost:3000/ludis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        console.log(response);
        console.log("Ludi Ajouté");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getNumberOfLudis(): Promise<number> {
    return getAllLudis().finally.length;
  }
  async function getIdOfLastLudi() {
    const json = await getAllLudis();
    return json[json.length - 1].id;
  }

  const glads = ref();

  async function getGladiateurs(ludiId: String) {
    await fetch("http://localhost:3000/gladiateurs?ludiId=" + ludiId, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        if (response[0] != undefined) {
          glads.value = response;
        } else {
          alert("Pas de ludis correspondants");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return glads.value;
  }

  async function getAllGladiateurs() {
    await fetch("http://localhost:3000/gladiateurs", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        if (response[0] != undefined) {
          ludis.value = response;
        } else {
          alert("Pas de Gladiateurs correspondants");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return ludis.value;
  }
  async function postGladiateur(body: string) {
    console.log("before : " + body);
    await fetch("http://localhost:3000/gladiateurs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert(
            "Server returned " + response.status + " : " + response.statusText
          );
        }
      })
      .then((response) => {
        console.log(response);
        console.log("Gladiateur Ajouté");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function getNumberOfGlads(): Promise<number> {
    return getAllGladiateurs().finally.length;
  }
  async function getIdOfLastGlad() {
    const json = await getAllGladiateurs();
    return json[json.length - 1].id;
  }

  return {
    connect,
    getLudi,
    getLudis,
    getAllLudis,
    postLudi,
    getNumberOfLudis,
    getIdOfLastLudi,
    getGladiateurs,
    getAllGladiateurs,
    postGladiateur,
    getNumberOfGlads,
    getIdOfLastGlad
  };
}
