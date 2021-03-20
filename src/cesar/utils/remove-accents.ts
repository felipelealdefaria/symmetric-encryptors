import accents from 'remove-accents'

export const removeAccents = (text: string): string => accents.remove(text)
