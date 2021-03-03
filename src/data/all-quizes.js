const AllQuizes = [
  {
    question:
      "Which network connections are used by AWS Snowball to minimize data transfer times?",
    choices: [
      {
        text: "both UTP and STP copper cables"
      },
      {
        text: "both USB and Ethernet cables with special adapters"
      },
      {
        text: "both thinnet and thicknet copper cables"
      },
      {
        text: "both RJ45 and SFP+ with either a fiber or copper interface"
      }
    ],
    answers: [3],
    help:
      "An AWS Snowball appliance has a 10GBaseT network connection (both RJ45 as well as SFP+ with either a fiber or copper interface) to minimize data transfer time.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "__________ is a good choice for distribution of frequently accessed static content that benefits fromedge delivery, like popular website images, videos, media files or software downloads.",
    choices: [
      {
        text: "Amazon CloudFront"
      },
      {
        text: "Amazon Glacier"
      },
      {
        text: "Amazon S3"
      },
      {
        text: "Amazon EBS"
      }
    ],
    answers: [0],
    help:
      "Amazon CloudFront is a good choice for distribution of frequently accessed static content that benefits edge delivery, like popular website images, videos, media files or software downloads.",
    tags: ["aws", "storage"]
  },
  {
    question: "Where does Amazon EFS store its data?",
    choices: [
      {
        text: "A bucket"
      },
      {
        text: "A volume"
      },
      {
        text: "A cache"
      },
      {
        text: "A file system"
      }
    ],
    answers: [3],
    help:
      "Amazon EFS is similar to on-premise network attached storage, in contrast to EBS and EC2 instance store, which offer virtual directly attached storage, and Amazon S3, which offers internet accessible object storage with a flat structure.",
    tags: ["aws", "storage"]
  },
  {
    question: "How can AWS Snowball handle petabyte-scale data migration?",
    choices: [
      {
        text:
          "Data is sent encoded (forward error correction) via a high speed network connection."
      },
      {
        text: "Data is sent compressed via a high speed network connection."
      },
      {
        text:
          "Data is sent via a shipping container, pulled by a semi-trailer truck."
      },
      {
        text: "Data is sent via a physical appliance sent to you by AWS."
      }
    ],
    answers: [3],
    help:
      "Snowball uses secure appliances to transfer large amounts of data into and out of the AWS cloud; this is fast and cheaper than high-speed internet.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "How is every object stored in S3 Standard storage replicated to increase the data durability?",
    choices: [
      {
        text:
          "Multiple copies are stored in different availability zone within the same region as the original object."
      },
      {
        text:
          "Each object is copied via an increamental snapshot, which is stored in another bucket controled by AWS, not the user."
      },
      {
        text:
          "Each object is copied multiple times and stored on the same AWS datacenter hardware as the original object."
      },
      {
        text:
          "Each object is copied once and stored within the same availibility zone as the original object."
      }
    ],
    answers: [0],
    help:
      "Amazon S3 Standard and Standard-IA copy data to several facilities in separate availability zones within the same region. This level of repliation ensures that AWS could suffer two concurrent facility outage within a region without any data being lost.",
    tags: ["aws", "storage"]
  },
  {
    question: "Which type of EBS volume does AWS specifically recemmended for use as a boot volume?",
    choices: [
      {
        text: "General Purpose SSD volume (GP2)"
      },
      {
        text: "Provisioned IOPS SSD volume (IO1)"
      },
      {
        text: "Cold HDD (SC1)"
      },
      {
        text: "Throughput Optimized HDD (ST1)"
      }
    ],
    answers: [0],
    help: "General Purpose (SSD) volumes are suitable for a broad range of workloads, including small-to-medium-sized databases, development and test environments, and boot volumes.",
    tags: ["aws", "storage", "EBS"]
  },
  {
    question: "Which of the following S3 features can noticeably increase your storage costs?",
    choices: [
      {
        text: "versioning"
      },
      {
        text: "lifecycle rules"
      },
      {
        text: "Using S3-managed encryption keys"
      },
      {
        text: "hosting static web resources on S3"
      }
    ],
    answers: [0],
    help: "Using versioning will noticeably increase your storage costs because as objects are updated, new versions of the object are created and stored in S3. Because Amazon S3 charges for storage used, your account will be billed for all object versions stored within your buckets. Using lifecycle rules to automate migration of data to Amazon Glacier or deleting dated versions after a certain point are both ways to optimize cost.",
    tags: ["aws", "storage"]
  },
  {
    question: "Which statement about EC2 instance store volumes is incorrect?",
    choices: [
      {
        text: "The storage cost is included in the EC2 instance price."
      },
      {
        text: "Instance store volumes offer very high I/O speed."
      },
      {
        text:
          "The instance store volumes reside on the same hardware as host instance."
      },
      {
        text: "The are available for all instance types."
      }
    ],
    answers: [3],
    help:
      "Even though EC2 instance store volumes are part of the EC2 instance itself, they are not available for all instance types. To see which instance types offer it, be sure to review the documentation closely.",
    tags: ["aws", "storage"]
  },
  {
    question: "What does the server-side encryption provide in Amazon S3?",
    choices: [
      {
        text:
          "Server-side encryption does not exist for Amazon S3, but only for Amazon EC2."
      },
      {
        text:
          "Server-side encryption protects data at rest using Amazon S3-managed encryption keys (SSE-S3)."
      },
      {
        text:
          "Server-side encryption allows you to upload files using an SSL endpoint for a secure transfer."
      },
      {
        text:
          "Server-side encryption provides an encrypted virtual disk in the cloud."
      }
    ],
    answers: [1],
    help:
      "Server-side encryption is about protecting data at rest. Server-side encryption with Amazon S3-managed encryption keys (SSE-S3) employs strong multi-factor encryption. Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it regulary rotates.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "You are selecting data storage option for a general-purpose EC2 instance. Which of the following AWS storage services does not offer any added security controls for typical instances like this, such as data encryption or service-specific access control policies?",
    choices: [
      {
        text: "Amazon Glacier"
      },
      {
        text: "Amazon S3"
      },
      {
        text: "EC2 Instance Store Volumes"
      },
      {
        text: "Amazon EBS"
      }
    ],
    answers: [2],
    help:
      "From a security stance, instance store volumes don't offer any additional security features. As to be honest, they are not separate service like the other storage options. They are simply storage volumes attached to the same host on the EC2 instance, and they are provided as a part of the EC2 service. So, they effectively have the same security mechanisms provided by EC2. This can be IAM policies dictating which intances can and can't be launched, and what action you can perform on the EC2 instance, itself.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "In AWS Storage Gateway, using a tape gateway's virtual tape library (VTL), you can cost-effectively and durably archive backup data in ______________.",
    choices: [
      {
        text: "Amazon EFS"
      },
      {
        text: "Amalzon Glacier"
      },
      {
        text: "Amazon EBS"
      },
      {
        text: "Amazon CloudFront"
      }
    ],
    answers: [1],
    help:
      "In the AWS Storage Gateway, using a tape gateway's virtual tape libray (VTL), you can cost-effectively and durably archive backup data in Amazon Glacier.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "When using Amazon Glacier's bulk retrieval option, which of the following is correct?",
    choices: [
      {
        text: "Amazon Glacier takes 3-5 hours to retrieve data."
      },
      {
        text: "Amazon Glacier takes 1-5 minutes to retrieve data."
      },
      {
        text: "Amazon Glacier takes 5-12 hours to retrieve data."
      },
      {
        text: "Amazon Glacier takes 1 hour to retrieve data."
      }
    ],
    answers: [2],
    help:
      "Glacier is optimized for data that is infreuently accessed and for which retrieval times of several hours are suitable. The standard retrieval option, which is the default option, takes 3-5 hours to complete. The other options are expedited, which downloads a small amount of data (250 MB maximum) in 5 minutes,and bulk, which downloads large amount of data (petabytes) in 5-12 hours.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "A user has created a new EBS volume. The user wants to mount the volume on the instance to which it is attached. Which step is required before the user can mount the volume?",
    choices: [
      {
        text: "The user must create a file system on the volume."
      },
      {
        text: "The user must resize the volume."
      },
      {
        text: "The user must run a cyclic check on the device."
      },
      {
        text: "No step is required. The user can directly mount the device."
      }
    ],
    answers: [0],
    help:
      "When a user is trying to mount a blank EBS volume, it is required that the user first create a file system within the volume.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "A root AWS account owner is trying to understand various options to set the permission to Amazon S3. Which option below is not an access control mechanism in Amazon S3?",
    choices: [
      {
        text: "IAM User access policy"
      },
      {
        text: "S3 Bucket access policy"
      },
      {
        text: "S3 Bucket access control list"
      },
      {
        text: "S3 Object access policy"
      }
    ],
    answers: [3],
    help:
      "Amazon S3 provides a set of operations to work with the Amazon S3 resources. Managing S3 resource access referes to granting others permissions to work with S3. There are three ways the root account owner can define access with S3: \
    - S3 ACL: The user can use ACL to grant basic read/write permissions to other AWS accounts.\
    - S3 Bucket Policy: The policy is used to grant other AWS accounts or IAM users permissions for the bucket and the objects in it.\
    - User Access Policy: Define an IAM user and assign him the IAM policy which grants him access to S3.\
    ",
    tags: ["aws", "storage"]
  },
  {
    question:
      "How is an Amazon EFS mount target configured within your AWS infrastructure?",
    choices: [
      {
        text:
          "A mount target must be attached to an individual Amazon EC2 instance in a VPC, to attach the filesystem."
      },
      {
        text:
          "A mount target must be placed within a VPC to communicate with EC2 instances in that VPC."
      },
      {
        text:
          "A mount target must be placed within an availability zone to communicate with instanes in that availability zone."
      },
      {
        text:
          "A mount target must be placed within a subnet to communicate with instances in that subnet."
      }
    ],
    answers: [1],
    help:
      "An Amazon EFS mount target is not attached to each specific EC2 instance like an EBS volume. A mount target must be created within a VPC in order for the service to work, but it is recommended you create a mount target within each availability zone (AZ) within a VPC.\
    \
    Technically, one mount target in one availability zone will allow all EC2 instances to connect to the service, but there are additional costs when using a mount target in a different AZ.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "What is the difference between S3 bucket policies and IAM policies?",
    choices: [
      {
        text: "Only IAM policies offer fine-grained access control."
      },
      {
        text:
          "Only S3 bucket policies offer or restrict cross-account access to a bucket or object."
      },
      {
        text:
          "IAM can restrict access on an object level, but bucket policies cannot."
      },
      {
        text:
          "Bucket policies can only control access to specific buckets and the objects in it."
      }
    ],
    answers: [3],
    help:
      "S3 bucket policies and IAM policies both offer fine-grained access control. It is possible to offer cross-account access via S3 bucket policies and IAM policies, although IAM requires a trust policy that is not required for S3 bucket policies. Neither bucket policies nor IAM policies can restrict access at an object level. This is only possible with Access Control List (ACL). However, bucket policies can only pertain to a specific bucket, not to all buckets for a given account, or for all buckets for all users of a specific account.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "A user has launched a dedicated EBS-backed instance. You are curious where the EBS volume for this instance will be created. Which statement is correct about the EBS volume's creation?",
    choices: [
      {
        text:
          "The EBS volume will be created on the same tenant hardware assigned to the dedicated instance."
      },
      {
        text:
          "The EBS volumes will not be created on the smae tenant hardware assigned to the dedicated instance."
      },
      {
        text: "AWS does not allow a dedicated EBS-backed instance launch."
      },
      {
        text: "The user can specify where the EBS volume will be created."
      }
    ],
    answers: [1],
    help:
      "The dedicated instances are Amazon EC2 instances that run in a Virtual Private Cloud (VPC) on hardware that is dedicated to a single customer. When a user launch an Amazon EBS-backed dedicated instance, the EBS volume does not run on single-tenant hardware.",
    tags: ["aws", "storage"]
  },
  {
    question:
      "A user has moved an object to Glacier using the S3 object lifecycle rules. The user requests to restore the archive after 6 months. When the restore request is completed, the user accesses the restored object. In this scenario, which statement is incorrect?",
    choices: [
      {
        text:
          "The user needs to pay storage for both the archive and the S3 object that is temprarily restored."
      },
      {
        text: "The restored object's storage class will be S3-Standard."
      },
      {
        text:
          "The archive will be available as an bject for the duration specified by the user during the restoration request."
      },
      {
        text:
          "The user can modify the restoration period only by issuing a new restoration request with the updated period."
      }
    ],
    answers: [1],
    help:
      "The Amazon Glacier is an archival service offered by AWS. Amazon S3 provides lifecycle rules to archive and restore objects from S3 to Glacier. Once the object is archived their storage class will be changed to Glacier. If the user sends a request for restore, the storage class will still be Glacier for the restored object. The user will be paying for both the archived copy as well as for the restored object. The object is available only for the duration specified in the restoration request and if the user wants to modify that period, he has to raise another restore request with the updated duration.",
    tags: ["aws", "storage", "glacier", "s3"]
  },
  {
    question:
      "In Amazon CloudFront, when using a network of edge locations around the world, requests for your dynamic content are __________",
    choices: [
      {
        text:
          "sent to copies of your static content closer to viewers than the original content."
      },
      {
        text:
          "sent to copies of your static content in one of the edge locations to  a new edge location."
      },
      {
        text: "sent to your original servers running within or outside of AWS."
      },
      {
        text:
          "sent to the original content location in the AWS region you have chosen."
      }
    ],
    answers: [2],
    help:
      "In Amazon CloudFront, requests for your dynamic content are carried back to your origin servers running in Amazon Web Service (e.g., Amazon EC2, Elastic Load Balancing) over optimized network paths for a more reliable and consistent experience.",
    tags: ["aws", "storage", "cloudfront"]
  },
  {
    question:
      "Which type of AWS Storage Gateway offer local caches for frequently accessed data?",
    choices: [
      {
        text: "File Gateways"
      },
      {
        text: "Cached volume gateways"
      },
      {
        text: "Stored volume gateways"
      },
      {
        text: "Tape gateways"
      }
    ],
    answers: [0, 1],
    help:
      "Both file gateways and cached volume gateways provide local caches to store frequently accessed data. Stored volume gateways keep all files locally, so all stored data can be retrieved with reduced latency. Tape gaetways are an archival method, and not ideal for data that needs to be readily available.",
    tags: ["aws", "storage", "cache"]
  },
  {
    question: "What will happen if a user deletes an S3 object where versioning is enabled?",
    choices: [
      {
        text: "S3 will insert a delete marker and all the versions will remain in the bucket."
      },
      {
        text: "S3 will delete the last copy of the object, while the others remain intact."
      },
      {
        text: "S3 will delete all the versions of that object."
      },
      {
        text: "S3 will reset the version ID of the bucket and insert a delete marker that all the versions are deleted."
      }
    ],
    answers: [0],
    help: "When a user deletes an object for which versioning is enabled, S3 will set the delete marker against that object version. Consequently, all the versions will remain in the S3 bucket. The delete marker becomes the latest version. Thus, the next GET request without a version ID will be unable to retrieve the object.",
    tags: ["aws", "storage", "s3", "bucket"]
  },
  {
    question: "A user wants to enable access logging on an S3 bucket in your AWS account, to track requests to access it.  Which steps are required to set up access logging for your bucket?",
    choices: [
      {
        text: "Create an IAM Role granting write permission on the destination bucket for log storage."
      },
      {
        text: "Turn on the bucket's log delivery by adding logging configuration to the bucket."
      },
      {
        text: "Grant the Amazon S3 Log Delivery group write permission on the destination bucket for log storage."
      },
      {
        text: "Create an IAM policy for the bucket and allow log access."
      }
    ],
    answers: [1,2],
    help: "By default, logging is disabled. To enable access logging, you must do the following:\
    - Turn on the log delivery by adding logging configuration on the bucket for which you want Amazon S3 to deliver access logs. We will refer to this bucket as the source bucket.\
    - Grant the Amazon S3 Log Delivery group write permission on the bucket where you want the access logs saved. We will refer to this bucket as the target bucket.",
    tags: ["aws", "storage"]
  },
  {
    question: "In which circumstance would a bucket owner pay for the data transfers instead of the Requester Pays bucket?",
    choices: [
      {
        text: "When the request is a HTTP request"
      },
      {
        text: "When the request is a known request"
      },
      {
        text: "When the request is 202 Accepted"
      },
      {
        text: "When the request is anonymous"
      }
    ],
    answers: [3],
    help: "The charge for successful Requester Pays requests is straightforward: the requester pays for the data transfer and the request; the bucket owner pays for the data storage. However, the bucket owner is charged for the anonymous request.",
    tags: ["aws", "storage", "s3", "bucket"]
  },
  {
    question: "You are developing a new application in which you need to transfer files over long distances between client-side storage and an S3 bucket. You decide to try sending data to the S3 bucket using S3 Transfer Acceleration. What must you do to achieve this?",
    choices: [
      {
        text: "Use the CLI S3 accelerate upload commands."
      },
      {
        text: "Use the SDK S3 accelerate upload commands."
      },
      {
        text: "Use the new accelerate endpoints to transfer your data to S3."
      },
      {
        text: "Turn on S3 Transfer Acceleration for the bucket."
      }
    ],
    answers: [2,3],
    help: "After you turn on S3 Transfer Acceleration for a bucket, two new endpoints are created for the bucket: one for IPv4 and one for IPv6. You can use either the accelerate endpoints or the standard endpoints if you choose not to use the accelerate feature.",
    tags: ["aws", "storage", "s3", "bucket"]
  },
  {
    question: "By default, versioning is ____________ when an S3 bucket is created.",
    choices: [
      {
        text: "enabled for buckets in the US East (N. Virginia) region"
      },
      {
        text: "disabled only for the region where the user is located."
      },
      {
        text: "enabled for buckets in all regions"
      },
      {
        text: "disabled for buckets in all regions"
      }
    ],
    answers: [3],
    help: "A user can enable versioning with AWS S3 only at the bucket level. Versioning is disabled by default when a bucket is created.",
    tags: ["aws", "storage", "s3", "bucket"]
  },
  {
    question: "Question?",
    choices: [
      {
        text: "Choice"
      },
      {
        text: "Choice"
      },
      {
        text: "Choice"
      },
      {
        text: "Choice"
      }
    ],
    answers: [3],
    help: "No Help",
    tags: ["aws", "storage"]
  },
  {
    question: "Question?",
    choices: [
      {
        text: "Choice"
      },
      {
        text: "Choice"
      },
      {
        text: "Choice"
      },
      {
        text: "Choice"
      }
    ],
    answers: [3],
    help: "No Help",
    tags: ["aws", "storage"]
  }
];

export default AllQuizes;
