import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Icon, Toolbar } from '@trubittech/ui'

import styles from '../../styles/Home.module.css'

const Showcase: NextPage = () => {
  return (
    <div className={styles.container} style={{ flex: 1 }}>
      <Head>
        <title>Showcase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toolbar.Root>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="normal">
            <Icon.FontFamilyIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="bold">
            <Icon.FontBoldIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">
            <Icon.FontItalicIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="size">
            <Icon.FontSizeIcon />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator />
        <Toolbar.Link
          href="#"
          style={{ padding: '8px', color: '#0a0a0a', fontSize: 13, fontWeight: 500 }}
        >
          Documents
        </Toolbar.Link>
        <Toolbar.Button>
          <Icon.UploadIcon />
        </Toolbar.Button>
        <Toolbar.Button>
          <Icon.EnterFullScreenIcon />
        </Toolbar.Button>
      </Toolbar.Root>
    </div>
  )
}

export default Showcase
