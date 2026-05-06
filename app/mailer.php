<?php
// DEPRECATED — DO NOT USE.
// This file is a legacy artifact from a non-Next.js implementation.
// All contact submissions are now handled by /app/api/contact/route.ts.
// Schedule for hard deletion (`rm app/mailer.php`) in your next housekeeping commit.
http_response_code(410);
header("Content-Type: text/plain");
echo "Gone. Use https://sofgent.com/contact instead.";
exit;
