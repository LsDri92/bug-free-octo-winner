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
    error: string;
    success: string;
    invalidMail: string;
    wait: string;
    fields: string;
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