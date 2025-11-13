import { defineI18nConfig } from '#i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      addDemoData: 'Add demo data',
      publish: 'Publish',
      github: 'Github',
      madeBy: 'Made by kamtech',
    },
    fr: {
      addDemoData: 'Ajouter des données de démonstration',
      publish: 'Publier',
      github: 'Github',
      madeBy: 'Fait par kamtech',
    }
  }
}))
