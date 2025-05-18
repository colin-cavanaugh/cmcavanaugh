export interface StoredNewsletter {
  name: string
  email: string
  frequency: string
  tosAgree: boolean
  wantsProductUpdates: boolean
  wantsMarketingPromos: boolean
  wantsEducationalContent: boolean
}

const KEY = 'newsletterSignup'

export const useStoredNewsletter = (): [StoredNewsletter, (newValues: StoredNewsletter) => void] => {
  const newsLetterSignupStr = window.localStorage.getItem(KEY)
  const newsLetterSignup: StoredNewsletter = newsLetterSignupStr ? JSON.parse(newsLetterSignupStr) : {}

  const setValues = (newValues: StoredNewsletter) => {
    window.localStorage.setItem(KEY, JSON.stringify(newValues))
  }

  return [newsLetterSignup, setValues]
}
