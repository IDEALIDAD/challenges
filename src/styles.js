export const styles = {
  body: {
    margin: '0',
    padding: '0',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Ubuntu', sans-serif"
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '20px',
    maxWidth: '800px',
    gap: '20px',
    margin: '20px auto'
  },
  imageContainer: {
    textAlign: 'center',
    overflow: 'hidden',
    maxHeight: '100%'
  },
  imageContainerImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '20px',
    marginBottom: '20px'
  },
  button: {
    maxWidth: '50%',
    padding: '15px 20px',
    backgroundColor: '#333333',
    color: '#fff',
    border: 'none',
    borderRadius: '0',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'normal'
  },
  footer: {
    color: '#BDBDBD',
    marginTop: '40px'
  },
  topContainer: {
    padding: '20px 20px',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  notFoundText: {
    fontSize: '18px',
    fontWeight: 'bold'
  }
};
