export interface ILanguage {
  about: {
    name: string;
    title: string;
  };
  skills: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    name: string;
    message: string;
    email: string;
    send: string;
    cancel: string;
    succesMessage: string;
    errorMessage: string;
},
footer: {
  name: string;
  title: string;
  connect: string;
  rights: string;
  message: string;
}
  // ...otras secciones como "projects", "contact", etc.
}