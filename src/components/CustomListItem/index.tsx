import { Link, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import {
  Apps,
  Highlight,
  Translate,
  ContactMail,
  ChromeReaderMode
} from '@material-ui/icons'

import useStyles from './styles'

type CustomListItemProps = {
  label: string
  href?: string
  target?: string
  iconName: string
  isSelected: boolean
  onClick?(): void
}

const CustomListItem: React.FC<CustomListItemProps> = ({
  label,
  href,
  target,
  iconName,
  isSelected,
  onClick
}) => {
  const classes = useStyles()

  const getIcon = icon => {
    switch (icon) {
      case 'ourMission':
        return <Highlight />
      case 'news':
        return <ChromeReaderMode />
      case 'contact':
        return <ContactMail />
      case 'language':
        return <Translate />
      default:
        return <Apps />
    }
  }

  return (
    <Link
      onClick={onClick}
      href={href}
      target={target}
      className={classes.linkStyle}
    >
      <ListItem
        classes={{
          root: classes.rootListItem,
          selected: classes.selectedListItem
        }}
        className={classes.genericListItem}
        selected={isSelected}
      >
        <ListItemIcon
          classes={{
            root: classes.rootListItemIcon
          }}
          className={classes.genericListItemIconStyle}
        >
          {getIcon(iconName)}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.primaryListItemText
          }}
          primary={label}
        />
      </ListItem>
    </Link>
  )
}

export default CustomListItem
