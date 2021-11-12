import GlobalStyles from '../src/Styles/GlobalStyles';
import { ThemeProvider} from '../src/Context'

export const decorators = [
  Story => (
    <ThemeProvider>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
