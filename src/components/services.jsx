import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import NewsItems from "./NewsItems";
const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',

  //     margin: theme.spacing(0),

  //     boxShadow: "7",

  // },


  rootTextRight: {
    // display:'flex',
    width: '100%',
    maxWidth: 500,
    float: 'right',
    fontSize: '120px',
    margin: '60px'

  },
  rootTextLeft: {
    // display:'flex',
    width: '100%',
    maxWidth: 500,
    float: 'left',
    fontSize: '120px',
    margin: '60px',

  },

  // small: {
  //   width: theme.spacing(3),
  //   height: theme.spacing(3),
  // },
  largeRight: {
    width: theme.spacing(65),
    height: theme.spacing(65),

  },
  largeLeft: {
    width: theme.spacing(65),
    height: theme.spacing(65),
    float: 'left',

  },
}));


// function TextLeft() {

//   const classes = useStyles();
//   return (
   
//   )

// }
// function TextRight() {

//   const classes = useStyles();
//   return (

//   )

// }

export default function Services(props) {
  const classes = useStyles();


  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
            </p>
        </div>

        {props.data
              ? props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} >

        <div>
          <div align="left" className={classes.rootTextLeft}>
            <NewsItems
              title={d.title}
              writter={d.writer}
              content={d.content} />
          </div>
          <Avatar alt="Remy Sharp" src="img/portfolio/01-small.jpg" className={classes.largeLeft} />
        </div>


        <br />
        <br />
        <br />
        <br />


        <div>
          <div align="right" className={classes.rootTextRight}>
            <NewsItems
              title={"‹‹እግዚአብሔርን መፍራት›› (መዝ. ፴፫፥፲፩)"}
              writter={" ዲያቆን ዮሴፍ በቀለ"}
              content={"  ነቢዩ ዳዊት ‹‹ልጆቼ ሆይ ኑ፥ ስሙኝ፤ እግዚአብሔርን መፍራት አስተምራቹሁ ዘንድ›› ያለን ሰው አምላኩ እግዚአብሔርን በመፍራት ሊኖር እንደሚገባ ሲገልጽ ነው፡፡ በዚሁ መዝሙር ላይ " +
                " ‹‹ሕይወትን የሚፈቅድ ሰው ማን ነው? በጎ ዘመንንም ለማየት የሚወድድ ማን ነው?? አንደበትህን ከክፉ ከልክል፥ ከንፈሮችህም ሽንገላን እንዳይናገሩ። ከክፉ ሽሽ፥ መልካምንም አድርግ፤ ሰላምን ሻት፥ ተከተላትም።" +
                " የእግዚአብሔር ዐይኖች ወደ ጻድቃኑ፥ ጆሮዎቹም ወደ ልመናቸው ናቸውና›› ብሏል፤ ይህም እኛ ከፈጣሪያችን ጋር እንኖር ዘንድ ማድረግ የሚገባንን ሁሉ እንድንፈጽም ነው። (መዝ. ፴፫፥፲፩-፲፭)በዚህም የሰው ልጅ ሲፈጠር " +
                "ጀምሮ የእግዚአብሔርን ሕግ በማክበርና ትእዛዛቱን በመፈጸም ዘወትር እግዚአብሔርን በመፍራት እና በመታዘዝ እንዲኖር ተፈጥሯል። ምክንያቱም እኛም ጠቢቡ ሰለሞን በምሳሌ ፩፥፯ ላይ እና ቅዱስ ዳዊት በመዝሙር ፻፲፥፲ ላይ ሁለቱም" +
                " የጥበብ መጀመሪያ አምላካችን እግዚአብሔርን መፍራት እንደሆነ ነግረውናል። "} />
          </div>
          <Avatar alt="Remy Sharp" src="img/portfolio/01-small.jpg" className={classes.largeRight} />
        </div>

        </div>
        ))
              : "loading"}
      </div>
    </div>
  );

}


