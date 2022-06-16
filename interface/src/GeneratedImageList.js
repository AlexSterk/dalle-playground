import React from 'react';
import { Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    generatedImg: {
        borderRadius: '8px',
    },
    imageGrid: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        }
    }
});

const GeneratedImageList = ({ classes, generatedImages, promptText }) => {

    const ImageObject = ({ imgData, promptText, index }) => {
        const imgSrc = `data:image/png;base64,${imgData}`
        const alt = `${promptText} ${index}`
        const title= "Download image"
        const downloadedFilename = promptText + "_" + index + ".jpeg"
        
        return (
            <a href={imgSrc} alt={alt} title={title} download={downloadedFilename}>
                <img src={imgSrc} className={classes.generatedImg} alt={alt} title={title} />
            </a>
        )
    }


    return (
        <Grid container className={classes.imageGrid} alignItems="center" spacing={3}>
            {generatedImages.map((generatedImg, index) => {
                return (
                    <Grid item key={index}>
                        <ImageObject imgData={generatedImg} promptText={promptText} index={++index}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default withStyles(useStyles)(GeneratedImageList)