import ClientError from "../../utils/error";

// Error middleware
export const onError = (err, req, res) => {
  if (err instanceof ClientError) {
    return res.status(err.statusCode).json(err);
  }

  if (process.env.NODE_ENV === "development") {
    console.error(err);
  }

  return res.status(500).json({
    status: 500,
    error: {
      code: "internal_server_error",
      message: err,
    },
  });
};

export const onNoMatch = (req, res) => {
  return res.status(405).end("Method not allowed!");
};
