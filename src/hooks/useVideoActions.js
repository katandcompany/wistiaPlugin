import useBuildfireObjects from './useBuildfireObjects';
import useErrorHandler from './useErrorHandler';

const useVideoActions = () => {
  const { bfDevice, bfNavigation, bfNotes } = useBuildfireObjects();
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

  const addVideoNote = (event) => {
    event.preventDefault();
    const noteDetails = {
      imageUrl: 'glyphicon glyphicon-edit',
      itemId: event.currentTarget.getAttribute('data-video-id'),
      title: event.currentTarget.getAttribute('data-video-title'),
      // timeIndex: Math.round(window.player.getCurrentTime())
    };
    const callback = (err, data) => {
      if (err) return setErrorMsg(`There was an error opening the notes dialog. Message: ${err}`);
      return data;
    };
    bfNotes.openDialog(noteDetails, callback);
  };
  return {
    viewVideoExternally,
    shareVideo,
    addVideoNote
  };
};

export default useVideoActions;
