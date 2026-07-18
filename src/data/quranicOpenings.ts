export interface QuranicOpening {
  id: QuranicOpeningId
  arabic: string
  label: string
  suras: string[]
}

export type QuranicOpeningId =
  | 'none'
  | 'alm'
  | 'alms'
  | 'alr'
  | 'almr'
  | 'khyas'
  | 'th'
  | 'tsm'
  | 'ts'
  | 'ys'
  | 's'
  | 'hm'
  | 'hmasq'
  | 'q'
  | 'n'

export const quranicOpenings: QuranicOpening[] = [
  {
    id: 'none',
    arabic: '',
    label: 'None',
    suras: []
  },
  {
    id: 'alm',
    arabic: 'الم',
    label: 'Alif Lam Mim',
    suras: [
      'Al Baqara',
      'Ali Imran',
      'Al Ankabut',
      'Ar Rum',
      'Luqman',
      'As Sajda'
    ]
  },
  {
    id: 'alms',
    arabic: 'المص',
    label: 'Alif Lam Mim Sad',
    suras: ['Al Araf']
  },
  {
    id: 'alr',
    arabic: 'الر',
    label: 'Alif Lam Ra',
    suras: ['Yunus', 'Hud', 'Yusuf', 'Ibrahim', 'Al Hijr']
  },
  {
    id: 'almr',
    arabic: 'المر',
    label: 'Alif Lam Mim Ra',
    suras: ['Ar Rad']
  },
  {
    id: 'khyas',
    arabic: 'كهيعص',
    label: "Kaf Ha Ya 'Ayn Sad",
    suras: ['Maryam']
  },
  {
    id: 'th',
    arabic: 'طه',
    label: 'Ta Ha',
    suras: ['Ta Ha']
  },
  {
    id: 'tsm',
    arabic: 'طسم',
    label: 'Ta Sin Mim',
    suras: ['Ash Shuara', 'Al Qasas']
  },
  {
    id: 'ts',
    arabic: 'طس',
    label: 'Ta Sin',
    suras: ['An Naml']
  },
  {
    id: 'ys',
    arabic: 'يس',
    label: 'Ya Sin',
    suras: ['Ya Sin']
  },
  {
    id: 's',
    arabic: 'ص',
    label: 'Sad',
    suras: ['Sad']
  },
  {
    id: 'hm',
    arabic: 'حم',
    label: 'Ha Mim',
    suras: [
      'Ghafir',
      'Fussilat',
      'Az Zukhruf',
      'Ad Dukhan',
      'Al Jathiya',
      'Al Ahqaf'
    ]
  },
  {
    id: 'hmasq',
    arabic: 'حم عسق',
    label: "Ha Mim 'Ayn Sin Qaf",
    suras: ['Ash Shura']
  },
  {
    id: 'q',
    arabic: 'ق',
    label: 'Qaf',
    suras: ['Qaf']
  },
  {
    id: 'n',
    arabic: 'ن',
    label: 'Nun',
    suras: ['Al Qalam']
  }
]

export const quranicOpeningsById = new Map(
  quranicOpenings.map((opening) => [opening.id, opening])
)
