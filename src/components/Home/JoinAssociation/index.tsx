import { Grid, Box, Typography } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'
import { useTranslation } from 'next-i18next'

import { useSizes } from 'hooks'

import useStyles from './styles'

const socialMediaList = [
  {
    id: 0,
    title: 'gfgdfgdfg:',
    content: 'gfd gg dfgdfg dfgdf gdf gdfgdfgdf gdf g dfg f dg d f g '
  },
  {
    id: 1,
    title: 'gfgdfgdfg: ',
    content:
      'gfd gg dfgdfg dfgdsdsdsdd sds dsdsd df gdf gdfgdfgdf gdf g dfg f dg d f g '
  },
  {
    id: 2,
    title: 'gfgdfgdfg: ',
    content:
      'gfd gg dfgdfg dfgdf d dsdsdsdsddsdsd d s dsdsdsgdf gdfgdfgdf gdf g dfg f dg d f g '
  }
]

const JoinAssociation: React.FC = () => {
  const { t } = useTranslation()
  const { smDown } = useSizes()
  const classes = useStyles()

  return (
    <Grid container justifyContent={'center'} className={classes.boxPadding}>
      <Grid item md={8} xs={12}>
        <Box textAlign='center' pb={7}>
          <Typography variant='h1'>{t('socialMedia')}</Typography>
        </Box>
        <Box textAlign='center' pb={7}>
          <Typography variant='body1'>{t('socialMedia')}</Typography>
        </Box>
        {socialMediaList.map(item => (
          <Box key={item.id} pb={2} display='flex'>
            <FiberManualRecord
              color='primary'
              style={{ width: '10px', marginTop: '4px' }}
            />
            <Box paddingX={1}>
              <Typography variant='subtitle1'>{item.title}</Typography>
            </Box>
            <Box>
              <Typography align='left' variant='body1'>
                {item.content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  )
}

export default JoinAssociation
