import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

const UseStyle = (theme) => ({
  media: {
    height: '400px',
    [theme.breakpoints.down('sm')]: {
      height: '90',
    },
  },
  Card: {
    marginBottom: theme.spacing(5),
  },
});
function Post() {
  const classes = (e) => UseStyle(e);
  return (
    <Card sx={(theme) => classes(theme).Card}>
      <CardActionArea>
        <CardMedia
          sx={(theme) => classes(theme).media}
          image="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000"
          title="پست اول"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            این پست اول
          </Typography>
          <Typography variant="body">
            لورم ایپسوم متن سادگی فلان است برای مهدیلورم ایپسوم متن سادگی فلان
            است برای مهدیلورم ایپسوم متن سادگی فلان است برای مهدیلورم ایپسوم متن
            سادگی فلان است برای مهدیلورم ایپسوم متن سادگی فلان است برای مهدیلورم
            ایپسوم متن سادگی فلان است برای مهدیلورم ایپسوم متن سادگی فلان است
            برای مهدیلورم ایپسوم متن سادگی فلان است برای مهدیلورم ایپسوم متن
            سادگی فلان است برای مهدیلورم ایپسوم متن سادگی فلان است برای مهدیلورم
            ایپسوم متن سادگی فلان است برای مهدی
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary">بیشتر بخوانید</Button>
          <Button color="primary">اشتراک بذارید</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default Post;
