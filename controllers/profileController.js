export const uploadProfile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Profile picture is required' });
  }

  res.json({
    message: 'Profile uploaded successfully',
    file: req.file.filename,
    url: `/uploadProfile/${req.file.filename}`,
  });
};
