import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Head from '@site/src/modules/components/Head';
import AppContainer from '@site/src/modules/components/AppContainer';
import AppFooter from '@site/src/layouts/AppFooter';
import Divider from '@mui/material/Divider';
import AppHeader from '@site/src/layouts/AppHeader';
import BrandingProvider from '@site/src/BrandingProvider';
import MarkdownElement from '@site/src/modules/components/MarkdownElement';
import Link from '@site/src/modules/components/Link';

const StyledDiv = styled('div')({
  flex: '1 0 100%',
});

const StyledAppContainer = styled(AppContainer)(({ theme }) => ({
  '& .markdownElement': {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(4),
    },
  },
}));

export default function TopLayoutCareers(props) {
  const { docs } = props;
  const { description, rendered, title } = docs.en;

  return (
    <BrandingProvider>
      <AppHeader />
      <Head title={`${title} - MUI`} description={description}>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <StyledDiv>
        <StyledAppContainer component="main" sx={{ py: { xs: 3, sm: 4, md: 8 } }}>
          <Link
            href="/careers/#open-roles"
            rel="nofollow"
            variant="body2"
            sx={{ display: 'block', mb: 2 }}
          >
            {/* eslint-disable-next-line material-ui/no-hardcoded-labels */}
            {'< Back to open roles'}
          </Link>
          {rendered.map((chunk, index) => {
            return <MarkdownElement key={index} renderedMarkdown={chunk} />;
          })}
        </StyledAppContainer>
        <Divider />
        <AppFooter />
      </StyledDiv>
    </BrandingProvider>
  );
}

TopLayoutCareers.propTypes = {
  docs: PropTypes.object.isRequired,
};
