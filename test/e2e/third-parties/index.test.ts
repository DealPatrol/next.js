import { nextTestSetup } from 'e2e-utils'
import {
  testYouTubeEmbed,
  testGoogleMapsEmbed,
  testGTM,
  testGA,
} from './shared-tests'

describe('@next/third-parties basic usage', () => {
  const { next } = nextTestSetup({
    files: __dirname,
    dependencies: {
      '@next/third-parties': 'canary',
    },
  })

  it('renders YoutubeEmbed', async () => {
    await testYouTubeEmbed(next)
  })

  it('renders GoogleMapsEmbed', async () => {
    await testGoogleMapsEmbed(next)
  })

  it('renders GTM', async () => {
    await testGTM(next)
  })

  it('renders GA', async () => {
    await testGA(next)
  })
})
