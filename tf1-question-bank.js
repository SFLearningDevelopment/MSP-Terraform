/* build: 2026092901 */
/* Terraform Course 1 question bank: 100 questions. Loaded by tf1-exam.html. */
window.TF1_BANK = [
 {
  "id": "q001",
  "m": 1,
  "q": "Which statement best describes Infrastructure as Code?",
  "o": [
   "Infrastructure is described in files that a tool reads to create it",
   "Infrastructure is created by scripts that click through the console",
   "Infrastructure diagrams are drawn and then exported to the cloud",
   "Infrastructure is documented in a wiki after it has been built"
  ],
  "a": 0
 },
 {
  "id": "q002",
  "m": 1,
  "q": "Terraform configuration is called declarative. What does that mean?",
  "o": [
   "You list every API call in the order it must run",
   "You describe the end result and Terraform works out the steps",
   "You must declare each resource in a separate file",
   "You write the configuration in a general programming language"
  ],
  "a": 1
 },
 {
  "id": "q003",
  "m": 1,
  "q": "Which of these is an advantage of keeping infrastructure in version control?",
  "o": [
   "Resources are created faster by the cloud platform",
   "Cloud costs drop automatically for versioned resources",
   "Every change has an author and date, and can be reviewed",
   "Access control is no longer needed for the cloud account"
  ],
  "a": 2
 },
 {
  "id": "q004",
  "m": 1,
  "q": "A team uses Terraform with AWS and Azure. What stays the same across both platforms?",
  "o": [
   "The resource types, such as the virtual machine resource",
   "The provider plugin that makes the API calls",
   "The account credentials used to connect",
   "The language and the write, plan, apply workflow"
  ],
  "a": 3
 },
 {
  "id": "q005",
  "m": 1,
  "q": "What is the role of a provider in Terraform?",
  "o": [
   "It translates configuration into API calls for one platform",
   "It stores the state file for every team member",
   "It checks the configuration for formatting problems",
   "It supplies the Terraform CLI for each operating system"
  ],
  "a": 0
 },
 {
  "id": "q006",
  "m": 1,
  "q": "Which statement about Terraform and multi-cloud is correct?",
  "o": [
   "One aws_instance block can create machines on any cloud",
   "One configuration can use several providers with one workflow",
   "Terraform converts all resources into a common cloud format",
   "Each cloud needs its own separate Terraform installation"
  ],
  "a": 1
 },
 {
  "id": "q007",
  "m": 1,
  "q": "Which is an example of Terraform being service-agnostic?",
  "o": [
   "It can only manage resources in the public cloud",
   "It needs a paid licence for each additional service",
   "It has providers for services such as GitHub and DNS",
   "It manages services by reading their log files"
  ],
  "a": 2
 },
 {
  "id": "q008",
  "m": 1,
  "q": "You run terraform apply twice with no changes to the files or the resources. What happens on the second run?",
  "o": [
   "Terraform creates a second copy of each resource",
   "Terraform deletes and recreates each resource",
   "Terraform fails because the resources already exist",
   "Terraform reports that no changes are needed"
  ],
  "a": 3
 },
 {
  "id": "q009",
  "m": 1,
  "q": "How can Terraform support a hybrid cloud setup?",
  "o": [
   "By using providers for both cloud and on-premises platforms",
   "By copying on-premises servers into the cloud each night",
   "By running a separate Terraform binary in each data centre",
   "By converting on-premises servers into cloud resources first"
  ],
  "a": 0
 },
 {
  "id": "q010",
  "m": 1,
  "q": "Why does IaC help reduce configuration drift?",
  "o": [
   "It stops anyone from logging in to the cloud console at any time",
   "The tool compares real resources with the files and fixes gaps",
   "It encrypts every resource so that nobody can change it manually",
   "It deletes any resource in the account not created by the tool"
  ],
  "a": 1
 },
 {
  "id": "q011",
  "m": 1,
  "q": "Which is the safest way to give Terraform your AWS credentials?",
  "o": [
   "Write the access keys into the provider block",
   "Store the keys in a variable default in variables.tf",
   "Use an AWS CLI profile or environment variables",
   "Put the keys in terraform.tfvars and commit it to Git"
  ],
  "a": 2
 },
 {
  "id": "q012",
  "m": 1,
  "q": "Which language is used to write Terraform configuration files?",
  "o": [
   "YAML, the same format used for Kubernetes files",
   "Python, using a Terraform library of functions",
   "JSON only, with no other format supported",
   "HCL, the HashiCorp Configuration Language"
  ],
  "a": 3
 },
 {
  "id": "q013",
  "m": 2,
  "q": "In required_providers, what does source = \"hashicorp/aws\" refer to?",
  "o": [
   "The namespace and type of the provider on the Terraform Registry",
   "The folder on your computer where the provider is installed",
   "The GitHub repository that holds your own configuration",
   "The AWS account that the provider connects to"
  ],
  "a": 0
 },
 {
  "id": "q014",
  "m": 2,
  "q": "Which provider versions does the constraint \"~> 6.1\" allow?",
  "o": [
   "Only version 6.1.0 exactly",
   "6.1 and newer, but below 7.0",
   "6.1.0 up to, but not including, 6.2.0",
   "Any version from 6.1 upwards, including 7.x"
  ],
  "a": 1
 },
 {
  "id": "q015",
  "m": 2,
  "q": "Which provider versions does the constraint \"~> 6.1.0\" allow?",
  "o": [
   "6.1 and newer, but below 7.0",
   "Any version newer than 6.1.0",
   "6.1.0 and newer, but below 6.2.0",
   "Only version 6.1.0 exactly"
  ],
  "a": 2
 },
 {
  "id": "q016",
  "m": 2,
  "q": "What is recorded in the .terraform.lock.hcl file?",
  "o": [
   "The versions of the modules used by the configuration",
   "The version of the Terraform CLI that last ran",
   "A lock that stops two people applying at once",
   "The exact provider versions chosen, with their checksums"
  ],
  "a": 3
 },
 {
  "id": "q017",
  "m": 2,
  "q": "Which files should be committed to version control?",
  "o": [
   ".terraform.lock.hcl and your .tf files",
   "The .terraform folder and your .tf files",
   "terraform.tfstate and your .tf files",
   "Only your .tf files and nothing else"
  ],
  "a": 0
 },
 {
  "id": "q018",
  "m": 2,
  "q": "The lock file records AWS provider 6.2.0. Version 6.4.0 is released and your constraint is \"~> 6.0\". What does a plain terraform init do?",
  "o": [
   "It installs 6.4.0 because it is the newest allowed",
   "It keeps 6.2.0 because that is what the lock file records",
   "It fails and asks you to delete the lock file before it continues",
   "It installs both versions side by side in the .terraform folder"
  ],
  "a": 1
 },
 {
  "id": "q019",
  "m": 2,
  "q": "Which command lets Terraform choose newer provider versions within your constraints and update the lock file?",
  "o": [
   "terraform validate -upgrade",
   "terraform providers -update",
   "terraform init -upgrade",
   "terraform apply -refresh"
  ],
  "a": 2
 },
 {
  "id": "q020",
  "m": 2,
  "q": "Your configuration needs two AWS regions. How do you configure the second region?",
  "o": [
   "Add a second region argument to the same provider block",
   "Create a second required_providers entry named aws2",
   "Run Terraform twice with a different region variable",
   "Add a second provider \"aws\" block with an alias"
  ],
  "a": 3
 },
 {
  "id": "q021",
  "m": 2,
  "q": "A resource must use the aliased provider aws.west. Which argument goes in the resource block?",
  "o": [
   "provider = aws.west",
   "alias = \"west\"",
   "region = aws.west",
   "source = \"aws.west\""
  ],
  "a": 0
 },
 {
  "id": "q022",
  "m": 2,
  "q": "What does required_version in the terraform block control?",
  "o": [
   "Which provider versions may be installed by init",
   "Which Terraform CLI versions may run the configuration",
   "Which module versions may be downloaded from the registry",
   "Which state file format version is written to disk"
  ],
  "a": 1
 },
 {
  "id": "q023",
  "m": 2,
  "q": "Which provider tier is owned and maintained by HashiCorp?",
  "o": [
   "Community",
   "Partner",
   "Official",
   "Verified"
  ],
  "a": 2
 },
 {
  "id": "q024",
  "m": 2,
  "q": "Which command shows the providers a configuration needs and where each requirement comes from?",
  "o": [
   "terraform version",
   "terraform show",
   "terraform graph",
   "terraform providers"
  ],
  "a": 3
 },
 {
  "id": "q025",
  "m": 2,
  "q": "How does the Terraform CLI communicate with a provider plugin?",
  "o": [
   "The provider runs as its own program and Terraform calls it over RPC",
   "The provider code is copied into the Terraform binary during init",
   "Terraform reads provider instructions from the state file on each run",
   "The provider sends its commands to Terraform through the AWS CLI"
  ],
  "a": 0
 },
 {
  "id": "q026",
  "m": 2,
  "q": "What does the default_tags block in the AWS provider do?",
  "o": [
   "It limits which resources may be created in the account",
   "It adds the listed tags to every resource that supports tags",
   "It sets the tags on the Terraform state file only",
   "It replaces any tags written on individual resources"
  ],
  "a": 1
 },
 {
  "id": "q027",
  "m": 3,
  "q": "Which three steps make up the main Terraform workflow?",
  "o": [
   "Init, validate and destroy",
   "Import, refresh and output",
   "Write, plan and apply",
   "Format, test and deploy"
  ],
  "a": 2
 },
 {
  "id": "q028",
  "m": 3,
  "q": "What does terraform init NOT do?",
  "o": [
   "Download the providers the configuration needs",
   "Download modules used by the configuration",
   "Set up the backend where state is stored",
   "Create the resources described in the files"
  ],
  "a": 3
 },
 {
  "id": "q029",
  "m": 3,
  "q": "When should you run terraform init again?",
  "o": [
   "After adding a provider or module, or changing the backend",
   "Before every terraform plan, even when nothing has changed",
   "Only once, the first time Terraform is installed on a computer",
   "Only after running terraform destroy on the configuration"
  ],
  "a": 0
 },
 {
  "id": "q030",
  "m": 3,
  "q": "What does terraform fmt do?",
  "o": [
   "It checks that every reference in the files is valid",
   "It rewrites the files into the standard layout and style",
   "It compares the files with the resources in the cloud",
   "It removes unused variables and outputs from the files"
  ],
  "a": 1
 },
 {
  "id": "q031",
  "m": 3,
  "q": "Your CI pipeline should fail if any file is not formatted, without changing the files. Which command fits?",
  "o": [
   "terraform fmt -recursive",
   "terraform validate -check",
   "terraform fmt -check",
   "terraform plan -format"
  ],
  "a": 2
 },
 {
  "id": "q032",
  "m": 3,
  "q": "Which problem would terraform validate catch?",
  "o": [
   "An AMI id that does not exist in the region",
   "An S3 bucket name that another account already uses",
   "An instance type that your account is not allowed to use",
   "A reference to a variable that has not been declared"
  ],
  "a": 3
 },
 {
  "id": "q033",
  "m": 3,
  "q": "Does terraform validate contact the cloud platform?",
  "o": [
   "No, it checks the configuration using the provider schemas",
   "Yes, it asks the cloud platform to approve every planned resource",
   "Yes, but only for resources that already exist in the account",
   "No, and it does not need init to have run first"
  ],
  "a": 0
 },
 {
  "id": "q034",
  "m": 3,
  "q": "What does terraform plan do?",
  "o": [
   "Makes the changes first, then shows a summary of what changed",
   "Shows what Terraform would change, without changing anything",
   "Saves the current infrastructure into new .tf files",
   "Checks only the formatting of the configuration"
  ],
  "a": 1
 },
 {
  "id": "q035",
  "m": 3,
  "q": "In a plan, what does the symbol -/+ next to a resource mean?",
  "o": [
   "The resource will be updated in place without replacement",
   "The resource will be read as a data source during apply",
   "The resource will be destroyed and a replacement created",
   "The resource will be removed from state but kept in the cloud"
  ],
  "a": 2
 },
 {
  "id": "q036",
  "m": 3,
  "q": "In a plan, what does the symbol ~ next to a resource mean?",
  "o": [
   "The resource will be destroyed and created again",
   "The resource will be created for the first time",
   "The resource will be removed from the configuration",
   "The resource will be updated in place"
  ],
  "a": 3
 },
 {
  "id": "q037",
  "m": 3,
  "q": "You want to apply exactly the changes a reviewer approved. What is the best approach?",
  "o": [
   "Run terraform plan -out=tfplan, then terraform apply tfplan",
   "Run terraform apply -auto-approve straight after the review",
   "Run terraform plan twice, then terraform apply",
   "Run terraform validate, then terraform apply -refresh"
  ],
  "a": 0
 },
 {
  "id": "q038",
  "m": 3,
  "q": "What does terraform apply -auto-approve do?",
  "o": [
   "It applies only the changes that have been reviewed",
   "It skips the prompt that asks you to type yes",
   "It approves changes to the provider versions",
   "It approves the plan in HCP Terraform"
  ],
  "a": 1
 },
 {
  "id": "q039",
  "m": 3,
  "q": "Which command previews what terraform destroy would remove?",
  "o": [
   "terraform destroy -check",
   "terraform show -destroy",
   "terraform plan -destroy",
   "terraform state list -destroy"
  ],
  "a": 2
 },
 {
  "id": "q040",
  "m": 3,
  "q": "terraform destroy is the same as which other command?",
  "o": [
   "terraform state rm on every resource",
   "terraform plan -refresh-only",
   "terraform init -reconfigure",
   "terraform apply -destroy"
  ],
  "a": 3
 },
 {
  "id": "q041",
  "m": 3,
  "q": "You delete a resource block from your files and run terraform apply. What happens to that resource?",
  "o": [
   "Terraform plans to destroy it, because it is no longer in the configuration",
   "Nothing, because Terraform only creates resources and never removes them",
   "It is kept in the cloud and marked as unmanaged in the configuration",
   "Terraform stops with an error until you run terraform state rm"
  ],
  "a": 0
 },
 {
  "id": "q042",
  "m": 3,
  "q": "A plan shows a value as (known after apply). Why?",
  "o": [
   "The provider could not be downloaded when init ran earlier",
   "The value will only exist once the resource is created",
   "The value is secret and hidden from the output",
   "The value was deleted from the state file"
  ],
  "a": 1
 },
 {
  "id": "q043",
  "m": 4,
  "q": "What is the main difference between a resource block and a data block?",
  "o": [
   "A resource reads existing objects; a data block creates them",
   "A resource works only on AWS; a data block works on any cloud",
   "A resource creates and manages an object; a data block only reads one",
   "A resource is stored in state; a data block is stored in the lock file"
  ],
  "a": 2
 },
 {
  "id": "q044",
  "m": 4,
  "q": "What is the address of a data source of type aws_ami named al2023?",
  "o": [
   "aws_ami.al2023",
   "data_aws_ami.al2023",
   "aws_ami.data.al2023",
   "data.aws_ami.al2023"
  ],
  "a": 3
 },
 {
  "id": "q045",
  "m": 4,
  "q": "Which situation is the best fit for a data source?",
  "o": [
   "Reading the id of a VPC that another team manages",
   "Creating a new S3 bucket for application logs",
   "Changing the instance type of your web server",
   "Deleting an old security group you no longer need"
  ],
  "a": 0
 },
 {
  "id": "q046",
  "m": 4,
  "q": "What happens to data sources when you run terraform destroy?",
  "o": [
   "They are deleted from the cloud along with the resources",
   "Nothing is destroyed, because they only read information",
   "They are converted into managed resources first",
   "Terraform stops and asks you to remove them manually"
  ],
  "a": 1
 },
 {
  "id": "q047",
  "m": 4,
  "q": "In resource \"aws_instance\" \"web\", what are aws_instance and web?",
  "o": [
   "The provider name and the region",
   "The module name and the resource name",
   "The resource type and the local name",
   "The resource name and the instance id"
  ],
  "a": 2
 },
 {
  "id": "q048",
  "m": 4,
  "q": "How do you refer to the id of the VPC declared as resource \"aws_vpc\" \"main\"?",
  "o": [
   "var.aws_vpc.main.id",
   "resource.aws_vpc.main.id",
   "aws_vpc[main].id",
   "aws_vpc.main.id"
  ],
  "a": 3
 },
 {
  "id": "q049",
  "m": 4,
  "q": "A subnet sets vpc_id = aws_vpc.main.id. What kind of dependency does this create?",
  "o": [
   "An implicit dependency: the VPC is created first",
   "An explicit dependency that needs depends_on as well",
   "No dependency: both are always created at the same time",
   "A reverse dependency: the subnet is created first"
  ],
  "a": 0
 },
 {
  "id": "q050",
  "m": 4,
  "q": "When destroying a VPC and a subnet that refers to it, in what order does Terraform work?",
  "o": [
   "The VPC first, then the subnet",
   "The subnet first, then the VPC",
   "Both at the same time, in parallel",
   "In alphabetical order of resource name"
  ],
  "a": 1
 },
 {
  "id": "q051",
  "m": 4,
  "q": "When is depends_on needed?",
  "o": [
   "Whenever one resource refers to another resource",
   "For every resource that is created inside a VPC",
   "When a dependency exists that references cannot show",
   "Whenever count or for_each is used on a resource"
  ],
  "a": 2
 },
 {
  "id": "q052",
  "m": 4,
  "q": "How many independent resources does Terraform create at the same time by default?",
  "o": [
   "1, it always creates resources one at a time",
   "5, unless the provider sets a different number",
   "20, unless the plan is saved to a file",
   "10, and the -parallelism option can change it"
  ],
  "a": 3
 },
 {
  "id": "q053",
  "m": 4,
  "q": "Which expression returns the first availability zone from data.aws_availability_zones.available?",
  "o": [
   "data.aws_availability_zones.available.names[0]",
   "data.aws_availability_zones.available.names[1]",
   "aws_availability_zones.available.names.first",
   "data.aws_availability_zones.available[0].name"
  ],
  "a": 0
 },
 {
  "id": "q054",
  "m": 4,
  "q": "A resource with count = 2 is named aws_subnet.public. What is the address of the second one?",
  "o": [
   "aws_subnet.public.2",
   "aws_subnet.public[1]",
   "aws_subnet.public[\"2\"]",
   "aws_subnet.public.second"
  ],
  "a": 1
 },
 {
  "id": "q055",
  "m": 4,
  "q": "What is the address of a resource aws_vpc.main created inside a module called network?",
  "o": [
   "network.aws_vpc.main",
   "aws_vpc.network.main",
   "module.network.aws_vpc.main",
   "module.aws_vpc.network.main"
  ],
  "a": 2
 },
 {
  "id": "q056",
  "m": 4,
  "q": "A data source's arguments depend on a resource that does not exist yet. When is the data source read?",
  "o": [
   "During terraform init, before any plan is made",
   "During terraform validate, using cached values",
   "Never, Terraform reports an error and stops",
   "During apply, once the resource has been created"
  ],
  "a": 3
 },
 {
  "id": "q057",
  "m": 5,
  "q": "How do you refer to an input variable named region?",
  "o": [
   "var.region",
   "variable.region",
   "input.region",
   "local.region"
  ],
  "a": 0
 },
 {
  "id": "q058",
  "m": 5,
  "q": "A variable block has no default. What happens if no value is given anywhere?",
  "o": [
   "Terraform uses an empty string as the value and continues",
   "Terraform asks for a value when you run plan or apply",
   "Terraform skips every resource that uses it",
   "Terraform sets the value to null and continues with the run"
  ],
  "a": 1
 },
 {
  "id": "q059",
  "m": 5,
  "q": "Which file is loaded automatically without any command-line option?",
  "o": [
   "prod.tfvars",
   "variables.tfvars",
   "terraform.tfvars",
   "values.tf.json"
  ],
  "a": 2
 },
 {
  "id": "q060",
  "m": 5,
  "q": "How do you set the variable environment using an environment variable?",
  "o": [
   "ENV_environment=dev",
   "TERRAFORM_environment=dev",
   "TF_environment=dev",
   "TF_VAR_environment=dev"
  ],
  "a": 3
 },
 {
  "id": "q061",
  "m": 5,
  "q": "A variable is set in terraform.tfvars and also with TF_VAR_ in the shell. Which value is used?",
  "o": [
   "The value in terraform.tfvars",
   "The value from the TF_VAR_ environment variable",
   "The variable's default value",
   "Terraform stops and reports a conflict"
  ],
  "a": 0
 },
 {
  "id": "q062",
  "m": 5,
  "q": "A variable is set in terraform.tfvars and with -var on the command line. Which value is used?",
  "o": [
   "The value in terraform.tfvars",
   "The value given with -var",
   "The variable's default value",
   "Whichever value is alphabetically first"
  ],
  "a": 1
 },
 {
  "id": "q063",
  "m": 5,
  "q": "You have a file called prod.tfvars. How do you make Terraform load it?",
  "o": [
   "Nothing is needed; every .tfvars file loads on its own",
   "Rename it to prod.tf so it loads with the configuration",
   "Pass it with -var-file=\"prod.tfvars\"",
   "Set TF_VAR_FILE=prod.tfvars in the shell"
  ],
  "a": 2
 },
 {
  "id": "q064",
  "m": 5,
  "q": "What does sensitive = true on a variable do?",
  "o": [
   "It encrypts the value inside the state file",
   "It stops the value from being used in resources",
   "It removes the value from the state file",
   "It hides the value in plan and apply output"
  ],
  "a": 3
 },
 {
  "id": "q065",
  "m": 5,
  "q": "Which statement about outputs is correct?",
  "o": [
   "Outputs are stored in state and shown after apply",
   "Outputs are only shown during terraform plan",
   "Outputs can be set from the command line with -var",
   "Outputs are written to terraform.tfvars after apply"
  ],
  "a": 0
 },
 {
  "id": "q066",
  "m": 5,
  "q": "An output uses the value of a sensitive variable. What must the output block include?",
  "o": [
   "type = sensitive",
   "sensitive = true",
   "hidden = true",
   "secret = var.name"
  ],
  "a": 1
 },
 {
  "id": "q067",
  "m": 5,
  "q": "How is a local value different from an input variable?",
  "o": [
   "A local can be set with -var; a variable cannot",
   "A local is stored in the lock file; a variable is not",
   "A local cannot be set from outside the configuration",
   "A local can only hold strings; a variable any type"
  ],
  "a": 2
 },
 {
  "id": "q068",
  "m": 5,
  "q": "Which type is an ordered collection that allows repeated values?",
  "o": [
   "set(string)",
   "map(string)",
   "object({...})",
   "list(string)"
  ],
  "a": 3
 },
 {
  "id": "q069",
  "m": 5,
  "q": "Which type holds named attributes that can each have a different type?",
  "o": [
   "object({...})",
   "map(string)",
   "set(any)",
   "list(string)"
  ],
  "a": 0
 },
 {
  "id": "q070",
  "m": 5,
  "q": "Which type has a fixed number of elements, where each position has its own type?",
  "o": [
   "list(any)",
   "tuple([...])",
   "set(string)",
   "map(any)"
  ],
  "a": 1
 },
 {
  "id": "q071",
  "m": 5,
  "q": "var.sizes is a map(string) with keys dev and prod. How do you read the value for prod?",
  "o": [
   "var.sizes[1]",
   "var.sizes.value(\"prod\")",
   "var.sizes[\"prod\"]",
   "var.prod.sizes"
  ],
  "a": 2
 },
 {
  "id": "q072",
  "m": 5,
  "q": "Which command prints a single output value without quotes, for use in a script?",
  "o": [
   "terraform show -output web_url",
   "terraform state show web_url",
   "terraform output -json web_url",
   "terraform output -raw web_url"
  ],
  "a": 3
 },
 {
  "id": "q073",
  "m": 6,
  "q": "Inside a resource that uses count, what gives the number of the current copy?",
  "o": [
   "count.index",
   "each.key",
   "self.index",
   "count.value"
  ],
  "a": 0
 },
 {
  "id": "q074",
  "m": 6,
  "q": "Inside a resource that uses for_each over a map, what gives the current map value?",
  "o": [
   "count.value",
   "each.value",
   "self.value",
   "for_each.value"
  ],
  "a": 1
 },
 {
  "id": "q075",
  "m": 6,
  "q": "Why is for_each usually safer than count when items may be removed from the middle?",
  "o": [
   "for_each creates resources faster than count",
   "for_each does not store its resources in state",
   "for_each tracks items by key, not by position",
   "for_each blocks any resource from being deleted"
  ],
  "a": 2
 },
 {
  "id": "q076",
  "m": 6,
  "q": "You want to create a resource only when var.create is true. Which is a common pattern?",
  "o": [
   "for_each = var.create",
   "depends_on = [var.create]",
   "enabled = var.create",
   "count = var.create ? 1 : 0"
  ],
  "a": 3
 },
 {
  "id": "q077",
  "m": 6,
  "q": "for_each is given a list of strings and Terraform reports an error. What is the usual fix?",
  "o": [
   "Wrap the list with toset()",
   "Wrap the list with length()",
   "Replace for_each with depends_on",
   "Put the list in a local value"
  ],
  "a": 0
 },
 {
  "id": "q078",
  "m": 6,
  "q": "What does this return: [for n in [\"a\", \"bb\", \"ccc\"] : length(n)]",
  "o": [
   "[\"a\", \"bb\", \"ccc\"]",
   "[1, 2, 3]",
   "{ a = 1, bb = 2, ccc = 3 }",
   "3"
  ],
  "a": 1
 },
 {
  "id": "q079",
  "m": 6,
  "q": "Which for expression produces a map rather than a list?",
  "o": [
   "[for n in local.names : upper(n)]",
   "[for n in local.names : n if n != \"\"]",
   "{ for n in local.names : n => length(n) }",
   "[for i, n in local.names : \"${i}-${n}\"]"
  ],
  "a": 2
 },
 {
  "id": "q080",
  "m": 6,
  "q": "For a resource that used count, aws_subnet.public[*].id is the same as which expression?",
  "o": [
   "[for s in aws_subnet : s.public.id]",
   "{ for s in aws_subnet.public : s.id }",
   "values(aws_subnet.public)[0].id",
   "[for s in aws_subnet.public : s.id]"
  ],
  "a": 3
 },
 {
  "id": "q081",
  "m": 6,
  "q": "What does var.env == \"prod\" ? \"t3.small\" : \"t3.micro\" return when var.env is \"dev\"?",
  "o": [
   "\"t3.micro\"",
   "\"t3.small\"",
   "\"dev\"",
   "null"
  ],
  "a": 0
 },
 {
  "id": "q082",
  "m": 6,
  "q": "What is a dynamic block used for?",
  "o": [
   "Creating several copies of a whole resource",
   "Repeating a nested block, such as ingress, for each item",
   "Loading a whole block of settings from a separate .tf file",
   "Changing a resource's provider while Terraform runs"
  ],
  "a": 1
 },
 {
  "id": "q083",
  "m": 6,
  "q": "What does merge({ a = \"1\", b = \"2\" }, { b = \"3\" }) return?",
  "o": [
   "{ a = \"1\", b = \"2\" }",
   "{ b = \"3\" }",
   "{ a = \"1\", b = \"3\" }",
   "An error, because the key b appears twice"
  ],
  "a": 2
 },
 {
  "id": "q084",
  "m": 6,
  "q": "What does lookup(var.sizes, \"qa\", \"t3.micro\") return when var.sizes has no key \"qa\"?",
  "o": [
   "An error saying the key is missing",
   "null",
   "An empty string",
   "\"t3.micro\""
  ],
  "a": 3
 },
 {
  "id": "q085",
  "m": 6,
  "q": "What does cidrsubnet(\"10.0.0.0/16\", 8, 5) return?",
  "o": [
   "\"10.0.5.0/24\"",
   "\"10.5.0.0/24\"",
   "\"10.0.0.5/16\"",
   "\"10.0.8.0/21\""
  ],
  "a": 0
 },
 {
  "id": "q086",
  "m": 6,
  "q": "Which command lets you try expressions and functions without creating any resources?",
  "o": [
   "terraform validate",
   "terraform console",
   "terraform fmt",
   "terraform show"
  ],
  "a": 1
 },
 {
  "id": "q087",
  "m": 6,
  "q": "Can you write your own functions in HCL?",
  "o": [
   "Yes, with a function block in any .tf file in the folder",
   "Yes, but only inside a child module's own files",
   "No, only built-in functions and provider-supplied ones",
   "No, and providers are not able to add any functions"
  ],
  "a": 2
 },
 {
  "id": "q088",
  "m": 6,
  "q": "What does join(\"-\", [\"tf\", \"course\", \"1\"]) return?",
  "o": [
   "[\"tf-course-1\"]",
   "\"tf course 1\"",
   "\"tf,course,1\"",
   "\"tf-course-1\""
  ],
  "a": 3
 },
 {
  "id": "q089",
  "m": 7,
  "q": "What is the main purpose of Terraform state?",
  "o": [
   "To map resources in the configuration to real objects",
   "To store the provider binaries that init downloads",
   "To keep a backup copy of the .tf files",
   "To record which Terraform versions are allowed"
  ],
  "a": 0
 },
 {
  "id": "q090",
  "m": 7,
  "q": "No backend block is configured. Where does Terraform keep state?",
  "o": [
   "In an S3 bucket created automatically",
   "In terraform.tfstate in the working folder",
   "In the .terraform.lock.hcl file",
   "In HCP Terraform, in a default workspace"
  ],
  "a": 1
 },
 {
  "id": "q091",
  "m": 7,
  "q": "Why should terraform.tfstate not be committed to Git?",
  "o": [
   "Git cannot store JSON files larger than a few kilobytes",
   "Terraform deletes the file after every apply",
   "It can hold secrets in plain text and changes often",
   "It is recreated from the .tf files on every run"
  ],
  "a": 2
 },
 {
  "id": "q092",
  "m": 7,
  "q": "A variable is marked sensitive. Where is its value still visible in plain text?",
  "o": [
   "In the plan output on screen",
   "In the .terraform.lock.hcl file",
   "In the terraform output list",
   "In the terraform.tfstate file"
  ],
  "a": 3
 },
 {
  "id": "q093",
  "m": 7,
  "q": "What does Terraform do with state before it builds a plan?",
  "o": [
   "Refreshes it by reading the current settings of each resource",
   "Deletes it and rebuilds it from the configuration files first",
   "Uploads it to the Terraform Registry so that it can be checked",
   "Nothing; it only reads state during apply"
  ],
  "a": 0
 },
 {
  "id": "q094",
  "m": 7,
  "q": "Someone changes a tag on a Terraform-managed bucket in the AWS console. What is this called?",
  "o": [
   "Refactoring",
   "Drift",
   "Tainting",
   "Locking"
  ],
  "a": 1
 },
 {
  "id": "q095",
  "m": 7,
  "q": "Which command lists the addresses of every resource in state?",
  "o": [
   "terraform show -list",
   "terraform output -all",
   "terraform state list",
   "terraform providers list"
  ],
  "a": 2
 },
 {
  "id": "q096",
  "m": 7,
  "q": "Which command shows all attributes of one resource in state?",
  "o": [
   "terraform output aws_instance.web",
   "terraform show aws_instance.web -json",
   "terraform validate aws_instance.web",
   "terraform state show aws_instance.web"
  ],
  "a": 3
 },
 {
  "id": "q097",
  "m": 7,
  "q": "What does the local backend do to prevent two commands on the same machine writing state at once?",
  "o": [
   "It locks the state file while a command runs",
   "It makes a new state file for every command",
   "It asks you to confirm before writing state",
   "It sends the state to a remote server"
  ],
  "a": 0
 },
 {
  "id": "q098",
  "m": 7,
  "q": "What is terraform.tfstate.backup?",
  "o": [
   "A copy of your .tf files from the last run",
   "The previous version of the state file",
   "A lock file created during apply",
   "A list of resources that failed to create"
  ],
  "a": 1
 },
 {
  "id": "q099",
  "m": 7,
  "q": "You delete terraform.tfstate but the resources still exist in AWS. What happens on the next apply?",
  "o": [
   "Terraform finds the resources by their names and carries on",
   "Terraform rebuilds the state from the lock file",
   "Terraform plans to create the resources again",
   "Terraform refuses to run until you reinstall it"
  ],
  "a": 2
 },
 {
  "id": "q100",
  "m": 7,
  "q": "Which resources does Terraform manage in your AWS account?",
  "o": [
   "Every resource in the account, whoever created it",
   "Every resource that has the default_tags applied",
   "Every resource in the regions named in the provider",
   "Only the resources recorded in its state"
  ],
  "a": 3
 }
];
