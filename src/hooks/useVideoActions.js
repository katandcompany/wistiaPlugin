import useBuildfireObjects from './useBuildfireObjects';
import useErrorHandler from './useErrorHandler';

const useVideoActions = () => {
  const { bfDevice, bfNavigation } = useBuildfireObjects();
  const { setErrorMsg } = useErrorHandler();
  // External Viewing
  const viewVideoExternally = (event) => {
    event.preventDefault();
    bfNavigation.openWindow(event.currentTarget.getAttribute('data-video-url'), '_system');
  };

  // Sharing
  const shareVideo = (event) => {
    event.preventDefault();
    const shareDetails = {
      subject: event.currentTarget.getAttribute('data-video-title'),
      text: `Check out this video titled '${event.currentTarget.getAttribute('data-video-title')}.'`,
      link: event.currentTarget.getAttribute('data-video-url')
    };
    bfDevice.share(shareDetails, (err, result) => {
      if (err) return setErrorMsg(`There was an error sharing the video. Message: ${err}`);
      return result;
    });
  };

  return {
    viewVideoExternally,
    shareVideo,
  };
};

export default useVideoActions;
