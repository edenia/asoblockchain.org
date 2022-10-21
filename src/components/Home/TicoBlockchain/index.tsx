import { FiberManualRecord, RadioButtonUnchecked } from '@material-ui/icons'
import { Grid, Box, Typography } from '@material-ui/core'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import { BaseButton, BaseDialog, FormComponent } from 'components'
import { useSizes } from 'hooks'

import Link from 'next/link'
import Image from 'next/image'

import useStyles from './styles'

const TicoBlockchain: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container justifyContent={'center'} className={classes.boxPadding}>
      <Grid item md={9} xs={12}>
        <Box textAlign='center' pb={7}>
          <Box>
            <Link
              passHref
              href='https://www.eventbrite.com.mx/e/foro-ticoblockchain-2022-tickets-444390262237'
            >
              <a target='_blank' rel='noopener noreferrer'>
                <Image
                  className={classes.banner}
                  width={399}
                  height={599}
                  src='/images/tico-blockchain.png'
                  alt='TicoBlockchain Event'
                />
              </a>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default TicoBlockchain
